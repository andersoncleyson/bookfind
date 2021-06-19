import styles from './styles.module.scss';
import Link from 'next/link';


export default function Header(){
    return (
        <header className={styles.headerContainer}>
            <Link href={'/'}>
                <img src="/logo.svg" alt="Bookfind" />
            </Link>
            

            <p>Conhecimento é tudo</p>

            <span>
                <a href="https://github.com/andersoncleyson">Sobre</a>
                <a href="https://www.linkedin.com/in/anderson-cleyson/">Contato</a>
            </span>
            
        </header>
    )
}