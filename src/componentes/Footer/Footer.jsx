import styles from './Footer.module.css'

function Footer (){
    return(
        <section className={styles.footer}>
            <div className={styles.content}>
                <p>© 2026 Isabelly Franklin Silva. Feito com s2 usando React</p>
            </div>
        </section>
    )
}

export default Footer