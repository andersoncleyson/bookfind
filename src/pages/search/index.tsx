import Link from 'next/link';
import Image from 'next/image'
import styles from './search.module.scss';

export default function Search(){
    return (
        <div className={styles.search}>
            <div className={styles.input}>
                <input type="text" placeholder="Pesquise qualquer coisa"></input>

                <button>Procurar</button>

            </div>

            <div className={styles.image}> 
                
                <img src='/image-search.svg' />
                    
            </div>
            
            
        </div>
    )
}