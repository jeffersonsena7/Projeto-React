import styles from './Home.module.css'
import projeto_fundo from '../../img/fundoanimado.gif'
import LinkButton from '../layout/LinkButton'

function Home(){
  return(
    <section className={styles.home_container}>
      <h1>Bem-vindo ao <span>Projeto</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo </p>
      <LinkButton to="/newproject" text="Criar projeto"/>
      <img src={projeto_fundo} alt="projeto"/>
    </section>
  )
}

export default Home