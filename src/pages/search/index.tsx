import Link from 'next/link';
import Image from 'next/image'
import styles from './search.module.scss';
import Head from 'next/head'

export default function Search(){
    return (
        <div className={styles.search}>
            <Head>
                <title>BookFind | Search</title>
            </Head>
            <div className={styles.input}>
                <input type="text" placeholder="Digite para pesquisar..."></input>

                <button>Procurar</button>

            </div>

            <div className={styles.image}> 
                
                <img src='/image-search.svg' />
                    
            </div>
            
            
        </div>
    )
}