import styles from './styles.module.scss';


export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <img src="/logo.svg" alt="Bookfind" />

            <p> Developed by Anderson Cleyson - 2021</p>

            <span>
                <a href="https://github.com/andersoncleyson"><img src="/git.svg"/></a>
                <a href="https://www.linkedin.com/in/anderson-cleyson/"><img src="/linkedin.svg"/></a>
            </span>
        </footer>
    )
}