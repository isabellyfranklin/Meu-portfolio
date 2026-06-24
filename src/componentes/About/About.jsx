import style from './About.module.css'
import { motion } from 'framer-motion'

function About (){
    return(
    <section className={style.about}>
       
        <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}> Sobre Mim </motion.h2>
        <div className={style.contentAbout}>
            <motion.p  initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            >Sou desenvolvedora front-end apaixonada por criar interfaces modernas, responsivas e com aquele cuidado especial nos detalhes. Trabalho com HTML, CSS, JavaScript e React para transformar designs em código de alta qualidade.<br></br>
            Adoro encarar novos desafios e projetos que me façam pensar fora da caixinha. Gosto de criar experiências intuitivas e agradáveis para o usuário, unindo design e funcionalidade em cada projeto.<br></br>
            Estou sempre buscando aprender novas tecnologias e evoluir minhas habilidades no desenvolvimento web, com interesse especial em desenvolvimento front-end moderno e interfaces criativas.</motion.p>
            
            <div className={style.stats}>
                <div className={style.statsItem}>
                    <h3>Foco</h3>
                    <p>Desenvolvimento Front-End & UI/UX</p>
                </div>
                <div className={style.statsItem}>
                    <h3>Formação</h3>
                    <p>Cursando Análise e Desenvolvimento de Sistemas</p>
                </div>
                <div className={style.statsItem}>
                    <h3>Localização</h3>
                    <p>Capão Redondo - SP</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About