import style from './Hero.module.css'
import { motion } from 'framer-motion'
import minhaBoneca from '../../assets/minha-boneca.png'


function Hero (){
    return(
        <section className={style.hero}>
            <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
        
            className={style.content}>
                <h1 className={style.firstName}>Olá, eu sou</h1>
                <h1 className={style.name}>Isabelly Franklin</h1>
                <p>Desenvolvedora front-end apaixonada por criar interfaces modernas, responsivas e com aquele cuidado especial nos detalhes.</p>
            
                <div className={style.btns}>
                    <a className={style.btnFirst} href="#">Ver Projetos</a>
                    <a className={style.btnSecond}  href="#">Contato</a>
                </div>

                <div className={style.socialMedia}>
                    
                </div>
            </motion.div>

            <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}

            className={style.imagem}>
                <img src={minhaBoneca} alt="notebook-codando"/>
            </motion.div>
        </section>
    )
   
}

export default Hero