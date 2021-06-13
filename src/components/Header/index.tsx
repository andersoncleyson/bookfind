import styles from './styles.module.scss';


export default function Header(){
    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Bookfind" />

            <p>Conhecimento é tudo</p>

            <span>
                <a href="https://github.com/andersoncleyson">Sobre</a>
                <a href="https://www.linkedin.com/in/anderson-cleyson/">Contato</a>
            </span>
            
        </header>
    )
}