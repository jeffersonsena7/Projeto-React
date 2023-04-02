import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject(){

  const history = useNavigate();

  function createPost(project){
    // initialize projeto and services
    project.cost = 0
    project.services = []

    fetch("http://localhost:5000/projects", {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(project),  //mandar os dados para o servidor
    })
      .then((resp) => resp.json())  //recebe a resposta e transforma em json
      .then((data) =>{ //vai pegar os dado e vai fazer alguma coisa 
        console.log(data)
        // redirect
        history("/project", {state: {message: 'Projeto criado com sucesso!'}})
      })
      .catch(err => console.log(err)) //possível erro no servidor
  }
  return(
    <div className={styles.newproject_container}>
      <h1>
        Criar projeto
      </h1>
      <p>Crie seu projeto para depois adicionar o serviço</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
    </div>
  )
}

export default NewProject