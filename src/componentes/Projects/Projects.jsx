import styles from "./Projects.module.css";
import CapaProjetoFaculdade from "../../assets/capa-projeto-faculdade.PNG"
import CapaCocaCola from "../../assets/capa-projeto-cocaCola.PNG"
import capaLojaBeleza from "../../assets/capa-projeto-lojaBeleza.PNG"
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

function Projects() {
  return(
    <section id="projects" className={styles.projects}>
      <motion.h2
      initial={{ opacity: 0, y: -30 }}  
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      >Projetos em Destaque</motion.h2>
      
      <motion.p
      initial={{ opacity: 0, y: -30 }}  
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      >Alguns dos meu projetos mais recentes</motion.p>

      <div className={styles.allProjects}>


        {/*PROJETO UM*/}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
        className={styles.myProject}>
          <div className={styles.imagem}>
            <img src={capaLojaBeleza}/>
          </div>
          <h3>Loja de Beleza</h3>
          <p>
           A Loja de Beleza é um e-commerce desenvolvido para oferecer uma experiência de compra elegante e responsiva para produtos de beleza. O projeto conta com vitrine de produtos, carrossel interativo, navegação por categorias e layout totalmente adaptado para diferentes tamanhos de tela.
          </p>
          <div className={styles.languages}>
            <span>HTML</span>
            <span>CSS</span>
            <span style={{padding:'10px '}}>JavaScript</span>
          </div>
          <a href="https://isabellyfranklin.github.io/Loja-de-Beleza/" target="_blank">Ver Projeto <ExternalLink size={16}/></a>
        </motion.div>


        {/*PROJETO DOIS*/}
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        viewport={{ once: true }}
        className={styles.myProject}>  
          <div className={styles.imagem}>
            <img src={CapaProjetoFaculdade}/>
          </div>
          <h3>Projeto Faculdade</h3>
          <p>
          Um dashboard de estudos criado para facilitar a revisão dos conteúdos do curso de Análise e Desenvolvimento de Sistemas (ADS). O projeto permite navegar pelos resumos organizados por trimestre, testar o conhecimento com <strong>quizzes interativos</strong> e tudo salvo automaticamente no navegador.
          </p>
          <div className={styles.languages}>
            <span>HTML</span>
            <span>CSS</span>
            <span style={{padding:'10px '}}>JavaScript</span>
          </div>
          <a href="https://isabellyfranklin.github.io/projeto-faculdade-materias/" target="_blank">Ver Projeto <ExternalLink size={16}/></a>
        </motion.div>

        {/*PROJETO TRES*/}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className={styles.myProject}>  
          <div className={styles.imagem}>
            <img src={CapaCocaCola}/>
          </div>
          <h3>Coca Cola</h3>
          <p>
            E-commerce completo para loja de produtos de beleza com interface
            elegante e responsiva.
          </p>
          <div className={styles.languages}>
            <span>HTML</span>
            <span>CSS</span>
            <span style={{padding:'10px'}}>JavaScript</span>
          </div>
          <a href="#" target="_blank">Ver Projeto <ExternalLink size={16}/> </a>
        </motion.div>
    

      </div>
    </section>
  )
}

export default Projects;
