import style from "./Projects.module.css";
import fotoComputador from "../../assets/notebook-codando.webp"
import { ExternalLink } from 'lucide-react'


function Projects() {
  return(
    <section className={style.projects}>
      <h2>Projetos em Destaque</h2>
      <p>Alguns dos meu projetos mais recentes</p>

      <div className={style.allProjects}>

        {/*PROJETO UM*/}
        <div className={style.myProject}>
          <div className={style.imagem}>
            <img src={fotoComputador}/>
          </div>
          <h3>Loja de Beleza</h3>
          <p>
            E-commerce completo para loja de produtos de beleza com interface
            elegante e responsiva.
          </p>
          <div className={style.languages}>
            <span>HTML</span>
            <span>CSS</span>
            <span style={{padding:'10px '}}>JavaScript</span>
          </div>
          <a href="#" target="_blank">Ver Projeto <ExternalLink size={16}/> </a>
        </div>

        {/*PROJETO DOIS*/}
        <div className={style.myProject}>  
          <div className={style.imagem}>
            <img src={fotoComputador}/>
          </div>
          <h3>Loja de Beleza</h3>
          <p>
            E-commerce completo para loja de produtos de beleza com interface
            elegante e responsiva.
          </p>
          <div className={style.languages}>
            <span>HTML</span>
            <span>CSS</span>
            <span style={{padding:'10px '}}>JavaScript</span>
          </div>
          <a href="#" target="_blank">Ver Projeto <ExternalLink size={16}/> </a>
        </div>

        {/*PROJETO TRES*/}
        <div className={style.myProject}>  
          <div className={style.imagem}>
            <img src={fotoComputador}/>
          </div>
          <h3>Loja de Beleza</h3>
          <p>
            E-commerce completo para loja de produtos de beleza com interface
            elegante e responsiva.
          </p>
          <div className={style.languages}>
            <span>HTML</span>
            <span>CSS</span>
            <span style={{padding:'10px '}}>JavaScript</span>
          </div>
          <a href="#" target="_blank">Ver Projeto <ExternalLink size={16}/> </a>
        </div>
   
   
      

      </div>
    </section>
  )
}

export default Projects;
