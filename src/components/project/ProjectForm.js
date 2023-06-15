import { useEffect, useState} from 'react' 
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'
import { parsePath } from 'react-router-dom'

function ProjectForm({handleSubmit, btnText, projectData}){
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})
  
  useEffect(() => { // usa para chamar só uma vez, para não ficar no loop infinito
    fetch('http://localhost:5000/categories', { // usando API pegando pelo get
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      setCategories(data)
    })
    .catch((err) => console.log(err))
  },[])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value})
  }
  function handleCategory(e) {
    setProject({ ...project, category:{
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text,
    },
  }) 
  }

  return(
      <form action='Method.php' onSubmit={submit} className={styles.form}>        
        <Input type="text" text="Nome do projeto" name="name"
         placeholder="Insira o nome do projeto" handleOnChange={handleChange}
         value={project.name ? project.name : ''}/>
        
        <Input type="number" text="Orçamento do projeto" name="budget"
         placeholder="Insira o orçamento total" handleOnChange={handleChange}
         value={project.budget ? project.budget : ''}/>
        
        <Select name="category" text="Selecione a categoria" options={categories}
        handleOnChange={handleCategory} value={project.category ? project.category.id : ''}/>
        
        <SubmitButton text={btnText}/> 
      </form>
  )
}

export default ProjectForm