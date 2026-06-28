import styles from './Contact.module.css'
import imgGitHub from './../../assets/icon-github.svg'
import imgMail from './../../assets/icon-mail.svg'
import imgLink from './../../assets/icon-linkedin.svg'

function Contact (){
    return(
    <section className={styles.contato}>
        <h2>Vamos Trabalhar Juntos</h2>
        <p>Estou sempre aberto a novos projetos e oportunidades</p>

         {/*MINHAS REDES DE CONTATO*/}
        <div className={styles.mediaContato}>

            <a href="mailto:isafranklin883@gmail.com" className={styles.media}>
                <span className={styles.mediaIcon}><img src={imgMail}/></span>
                <span className={styles.mediaName}>Email</span>
                <span className={styles.mediaSocial}>isafranklin883@gmail.com</span>
            </a>

            <a href="https://github.com/isabellyfranklin" target="_blank" className={styles.media}>
                <span className={styles.mediaIcon}><img src={imgGitHub}/></span>
                <span className={styles.mediaName}>GitHub</span>
                <span className={styles.mediaSocial}>@isabellyfranklin</span>
            </a>

            <a href="https://www.linkedin.com/in/isabelly-franklin-6baa56268/" target="_blank" className={styles.media}>
                <span className={styles.mediaIcon}><img src={imgLink}/></span>
                <span className={styles.mediaName}>LinkedIn</span>
                <span className={styles.mediaSocial}>isabellyfranklin</span>
            </a>
        </div>
      
    </section>
    )
}

export default Contact