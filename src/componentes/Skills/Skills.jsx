import styles from './Skills.module.css'
import { motion } from 'framer-motion'
import iconHtml from './../../assets/icon-html.svg'
import iconCss from './../../assets/icon-css.svg'
import iconJavaScript from './../../assets/icon-java-script.svg'
import iconReact from './../../assets/icon-react.svg'
import IconResposividade from './../../assets/icon-resposividade.svg'


function Skills (){
    return(
        <section id='skills' className={styles.skills}>

            <motion.h2
            initial={{ opacity: 0, y: -30 }}  
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            >Minhas Skills</motion.h2>

            <motion.p
            initial={{ opacity: 0, y: -30 }}  
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            >Tecnologias e ferramentas que domino</motion.p>

        <div className={styles.languagesSkills}>

            {/*HTML */}
            <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            viewport={{ once: true }}
            className={styles.skillCard}>   
                <div className={styles.skillHeader}>
                    <span className={styles.icon}><img src={iconHtml}/></span>
                    <span className={styles.skillName}>HTML</span>
                    <span className={styles.percent}>85%</span>
                 </div>
                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '85%' }}></div>
                </div>
            </motion.div>

            {/*CSS*/}
            <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            viewport={{ once: true }}
            className={styles.skillCard}>   
                <div className={styles.skillHeader}>
                    <span className={styles.icon}><img src={iconCss}/></span>
                    <span className={styles.skillName}>CSS</span>
                    <span className={styles.percent}>85%</span>
                 </div>
                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '85%' }}></div>
                </div>
            </motion.div>

            {/*JavaScript*/}
            <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            viewport={{ once: true }}
            className={styles.skillCard}>   
                <div className={styles.skillHeader}>
                    <span className={styles.icon}><img src={iconJavaScript}/></span>
                    <span className={styles.skillName}>JavaScript</span>
                    <span className={styles.percent}>50%</span>
                 </div>

                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '50%' }}></div>
                </div>
            </motion.div>


            {/*REACT*/}
             <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            viewport={{ once: true }}
            className={styles.skillCard}>   
                <div className={styles.skillHeader}>
                    <span className={styles.icon}> <img src={iconReact}/></span>
                    <span className={styles.skillName}>React</span>
                    <span className={styles.percent}>45%</span>
                 </div>

                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '45%' }}></div>
                </div>
            </motion.div>

            
            {/*FIGMA*/}
            <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
            viewport={{ once: true }}
            className={styles.skillCard}>   
                <div className={styles.skillHeader}>
                    <span className={styles.icon}><img src={iconCss}/></span>
                    <span className={styles.skillName}>Figma</span>
                    <span className={styles.percent}>80%</span>
                 </div>

                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '80%' }}></div>
                </div>
            </motion.div>

            {/*Responsivida*/}
            <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0 }}
             viewport={{ once: true }}
            className={styles.skillCard}>   
                <div className={styles.skillHeader}>
                    <span className={styles.icon}><img src={IconResposividade}/></span>
                    <span className={styles.skillName}>Responsive Design</span>
                    <span className={styles.percent}>90%</span>
                 </div>

                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '90%' }}></div>
                </div>
            </motion.div>

        </div>

        </section>     

    )
}

export default Skills