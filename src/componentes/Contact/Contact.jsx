import styles from './Contact.module.css'
import imgGitHub from './../../assets/icon-github.svg'
import imgMail from './../../assets/icon-mail.svg'
import imgLink from './../../assets/icon-linkedin.svg'

function Contact (){
    return(
    <section className={styles.contato}>
        <h2>Vamos Trabalhar Juntos</h2>
        <p>Estou sempre aberto a novos projetos e oportunidades.</p>

        <div className={styles.mediaContato}>

            <a href="mailto:isafranklin883@gmail.com" className={styles.media}>
                <span className={styles.icon}><img src={imgMail}/></span>
                <span>Email</span>
                <span>isafranklin883@gmail.com</span>
            </a>

            <a href="https://github.com/isabellyfranklin" target="_blank" className={styles.media}>
                <span className={styles.icon}><img src={imgGitHub}/></span>
                <span>GitHub</span>
                <span>@isabellyfranklin</span>
            </a>

            <a href="https://linkedin.com/in/isabellyfranklin" target="_blank" className={styles.media}>
                <span className={styles.icon}><img src={imgLink}/></span>
                <span>LinkedIn</span>
                <span>isabellyfranklin</span>
            </a>
        </div>
      
    </section>
    )
}

export default Contact