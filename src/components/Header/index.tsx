import styles from './styles.module.scss';


export default function Header(){
    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Bookfind" />

            <p>Conhecimento é tudo</p>

            <span>
                <a href="">Sobre</a>
                <a href="">Contato</a>
            </span>
            
        </header>
    )
}