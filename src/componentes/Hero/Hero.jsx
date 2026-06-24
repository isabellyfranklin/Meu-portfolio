import style from './Hero.module.css'
import notebookImg from '../../assets/notebook-codando.webp'


function Hero (){
    return(
        <section className={style.hero}>
            <div className={style.content}>
                <h1 className={style.firstName}>Olá, eu sou</h1>
                <h1 className={style.name}>Isabelly Franklin</h1>
                <p>Desenvolvedora front-end apaixonada por criar interfaces modernas, responsivas e com aquele cuidado especial nos detalhes.</p>
            
                <div className={style.btns}>
                    <a className={style.btnFirst} href="#">Ver Projetos</a>
                    <a className={style.btnSecond}  href="#">Contato</a>
                </div>

                <div className="social-media">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>

            <div className={style.imagem}>
                <img src={notebookImg} alt="notebook-codando"/>
            </div>
        </section>
    )
   
}

export default Hero