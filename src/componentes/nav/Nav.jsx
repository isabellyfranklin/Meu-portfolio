import style from './nav.module.css'

function Nav (){
    return(
        <nav className={style.navbar}>
            <h1>PORTFOLIO</h1>
            <ul>
                <li>Sobre</li>
                <li>Projetos</li>
                <li>Skills</li>
                <li>Contato</li>
            </ul>
        </nav>
    )
}

export default Nav