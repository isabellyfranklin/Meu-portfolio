import styles from './Skills.module.css'
import iconHtml from './../../assets/icon-html.svg'
import iconCss from './../../assets/icon-css.svg'
import iconJavaScript from './../../assets/icon-java-script.svg'
import iconReact from './../../assets/icon-react.svg'
import IconResposividade from './../../assets/icon-resposividade.svg'

function Skills (){
    return(
        <section className={styles.skills}>

            <h2>Minhas Skills</h2>
            <p>Tecnologias e ferramentas que domino</p>

        <div className={styles.languagesSkills}>

            {/*HTML */}
            <div className={styles.skillCard}>   
                <div className={styles.skillHeader}>
                    <span className={styles.icon}><img src={iconHtml}/></span>
                    <span className={styles.skillName}>HTML</span>
                    <span className={styles.percent}>85%</span>
                 </div>
                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '85%' }}></div>
                </div>
            </div>

            {/*CSS*/}
            <div className={styles.skillCard}>   
                <div className={styles.skillHeader}>
                    <span className={styles.icon}><img src={iconCss}/></span>
                    <span className={styles.skillName}>CSS</span>
                    <span className={styles.percent}>85%</span>
                 </div>
                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '85%' }}></div>
                </div>
            </div>

            {/*JavaScript*/}
            <div className={styles.skillCard}>   
                <div className={styles.skillHeader}>
                    <span className={styles.icon}><img src={iconJavaScript}/></span>
                    <span className={styles.skillName}>JavaScript</span>
                    <span className={styles.percent}>50%</span>
                 </div>

                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '50%' }}></div>
                </div>
            </div>


            {/*REACT*/}
             <div className={styles.skillCard}>   
                <div className={styles.skillHeader}>
                    <span className={styles.icon}> <img src={iconReact}/></span>
                    <span className={styles.skillName}>React</span>
                    <span className={styles.percent}>45%</span>
                 </div>

                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '45%' }}></div>
                </div>
            </div>

            
            {/*FIGMA*/}
            <div className={styles.skillCard}>   
                <div className={styles.skillHeader}>
                    <span className={styles.icon}><img src={iconCss}/></span>
                    <span className={styles.skillName}>Figma</span>
                    <span className={styles.percent}>80%</span>
                 </div>

                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '80%' }}></div>
                </div>
            </div>

            {/*Responsivida*/}
            <div className={styles.skillCard}>   
                <div className={styles.skillHeader}>
                    <span className={styles.icon}><img src={IconResposividade}/></span>
                    <span className={styles.skillName}>Responsive Design</span>
                    <span className={styles.percent}>90%</span>
                 </div>

                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '90%' }}></div>
                </div>
            </div>

        </div>

        </section>     

    )
}

export default Skills