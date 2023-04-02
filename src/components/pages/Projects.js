import { useLocation } from "react-router-dom"

import Message from "../layout/Message"
import Container from '../layout/Container'
import Loading from "../layout/Loading"
import LinkButton from "../layout/LinkButton"

import styles from './Projects.module.css'
import ProjectCard from "../project/ProjectCard"
import { useState, useEffect } from "react"

function Projects(){
  const [projects, setProjects] = useState([]) // criar o projeto
  const [removeLoading, setRemoveLading] = useState(false) //para excluir um projeto
  const [projectMessage, setProjectMessage] = useState('')

  const location = useLocation()
  let message = ''
  if(location.state){
    message = location.state.message
  }

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resp) => resp.json()) // pega o resultado e transforma em json
      .then((data) => {
        console.log(data)
        setProjects(data)
        setRemoveLading(true)
      }) 
      .catch((err) => console.log(err)) // caso apresente erro 
  }, [])

  function removeProject(id){
    fetch(`http://localhost:5000/projects/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(projects.filter((project) => project.id !==id))
        setProjectMessage('Projeto removido com sucesso!') // mostra a msg ao excluir o projeto
      })
  }

  return(
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto"/>
        </div>
        {message && <Message type="success" msg={message} />} 
        {projectMessage && <Message type="success" msg={projectMessage} />}
        <Container customClass="start">
          {projects.length > 0 &&
            projects.map((project) => (
            <ProjectCard 
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project?.category?.name} // colocado as interrogação devido a ter muitos category na programação
              key={project.id}
              handleRemove={removeProject} />
            ))}
          {!removeLoading && <Loading/>}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos cadastrados!</p>
          )}
        </Container>
       
    </div>
  )
}

export default Projects