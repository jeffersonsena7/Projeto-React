import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

import style from './Footer.module.css'
function Footer(){
  return(
    <footer className={style.footer}>
      <ul className={style.social_list}>
        <li>
          <a href="https://www.facebook.com/Jefferson.Joseane/" target="_blank"><FaFacebook/></a>
        </li>
        <li>
          <a href="https://www.instagram.com/jeffersonjoseane/" target="blanck"><FaInstagram/></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jefferson-sena-0b347a232/" target="_blank"><FaLinkedin/></a>
        </li>
        <li>
          <a href="https://github.com/jeffersonsena7" target="_blank"><FaGithub/></a>
        </li>
      </ul>
      <p className={style.copy}>
        <span>
          Projeto
        </span> &copy; 2023
      </p>
      <p className={style.autor}>Jefferson de Sena</p>
      <p className={style.marcando}> <a href=" https://icons8.com">Icones e imagens</a></p>
      <p>Illustration by <a href="https://icons8.com/illustrations/author/eEbrZFlkyZbD">Anna A</a>
      from <a href="https://icons8.com/illustrations">Ouch!</a>
       </p>
    </footer>
  )
}

export default Footer