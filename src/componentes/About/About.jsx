import style from './About.module.css'
import { motion } from 'framer-motion'

function About() {
    return (
        <section className={style.about}>

            <span className={style.tag}>quem sou eu</span>

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                Sobre Mim
            </motion.h2>

            <div className={style.contentAbout}>

                <motion.div className={style.bio}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}>
                    <p>Sou desenvolvedora front-end apaixonada por criar interfaces modernas, responsivas e com aquele cuidado especial nos detalhes. Trabalho com HTML, CSS, JavaScript e React para transformar designs em código de alta qualidade.</p>
                    <p>Adoro encarar novos desafios e projetos que me façam pensar fora da caixinha. Gosto de criar experiências intuitivas e agradáveis para o usuário, unindo design e funcionalidade em cada projeto.</p>
                    <p>Estou sempre buscando aprender novas tecnologias e evoluir minhas habilidades, com interesse especial em desenvolvimento front-end moderno e interfaces criativas.</p>
                    <div className={style.bioLinks}>
                        <a href="#projects" className={style.btnPrimary}>Ver projetos</a>
                        <a href="/cv.pdf" className={style.btnOutline}>Download CV</a>
                    </div>
                </motion.div>

                <motion.div className={style.stats}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}>
                    <div className={style.statsItem}>
                        <div className={style.statIcon}>🎯</div>
                        <div>
                            <h3>Foco</h3>
                            <p>Desenvolvimento Front-End & UI/UX</p>
                        </div>
                    </div>
                    <div className={style.statsItem}>
                        <div className={style.statIcon}>🎓</div>
                        <div>
                            <h3>Formação</h3>
                            <p>Cursando Análise e Desenvolvimento de Sistemas</p>
                        </div>
                    </div>
                    <div className={style.statsItem}>
                        <div className={style.statIcon}>📍</div>
                        <div>
                            <h3>Localização</h3>
                            <p>Capão Redondo, São Paulo</p>
                        </div>
                    </div>
                    <div className={style.statsItem}>
                        <div className={style.statIcon}>💼</div>
                        <div>
                            <h3>Status</h3>
                            <p>Disponível para estágio</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default About