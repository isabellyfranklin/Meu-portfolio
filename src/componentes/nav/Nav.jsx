import styles from './nav.module.css'
import { motion } from 'framer-motion'

function Nav (){
    return(
        <nav className={styles.navbar}>
            <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            >PORTFOLIO <span className={styles.ponto}>.</span></motion.h1>
            
            <motion.ul
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contato</a></li>
            </motion.ul>
        </nav>
    )
}

export default Nav