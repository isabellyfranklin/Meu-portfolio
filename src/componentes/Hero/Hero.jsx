import styles from './Hero.module.css'
import { motion } from 'framer-motion'
import minhaBoneca from '../../assets/minha-boneca.png'
import imgGitHub from './../../assets/icon-github.svg'
import imgMail from './../../assets/icon-mail.svg'
import imgLink from './../../assets/icon-linkedin.svg'


function Hero (){
    return(
        <section className={styles.hero}>
            <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
        
            className={styles.content}>
                <h1 className={styles.firstName}>Olá, eu sou</h1>
                <h1 className={styles.name}>Isabelly Franklin</h1>
                <p>Desenvolvedora front-end apaixonada por criar interfaces modernas, responsivas e com aquele cuidado especial nos detalhes.</p>
            
                <div className={styles.btns}>
                    <a className={styles.btnFirst} href="#">Ver Projetos</a>
                    <a className={styles.btnSecond}  href="#">Contato</a>
                </div>

                <div className={styles.socialMedia}>
                    <a className={styles.icon} href="https://github.com/isabellyfranklin"><img src={imgGitHub}/></a>
                    <a className={styles.icon} href="https://www.linkedin.com/in/isabelly-franklin-6baa56268/"><img src={imgLink}/></a>
                    <a className={styles.icon} href="#" style={{margin:"10px 0px 0px", }}><img src={imgMail}/></a>              
                </div>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}

            className={styles.imagem}>
                <img src={minhaBoneca} alt="notebook-codando"/>
            </motion.div>
        </section>
    )
   
}

export default Hero