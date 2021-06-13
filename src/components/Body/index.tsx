import styles from './styles.module.scss';


export default function Body(){
    return (
        <>
        <div className={styles.pageInit}>
            <div className={styles.text1}>
                <h1>Encontre o seu livro favorito e viage a um novo mundo.</h1>

                <p>Procure por qualquer livro. Se não souber o nome da obra, pode 
                    pesquisar pelo nome do autor ou da editora
                </p>

                <button type="button" className={styles.search}>
                    Procurar
                </button>
            </div>

            <div className={styles.image1}>
                <img className={styles.img1} src="img1.svg" />
            </div>
            
        </div>

        <div className={styles.pageInit2}>
            <div className={styles.image2}>
                <img className={styles.img2} src="img2.svg"/>
            </div>

            <div className={styles.text2}>
                <h1>Hábito da leitura</h1>

                <p>A leitura quanto a escrita são práticas sociais de suma 
                    importância para o desenvolvimento da cognição humana.</p>
            </div>
            
        </div>

        <div className={styles.pageInit3}>
            <div className={styles.text3}>
                <h1>Novos mundos, infinitras possibilidades.</h1>

                <p>Ambas proporcionam o desenvolvimento do intelecto e da imaginação, 
                    além de promoverem a aquisição de conhecimentos.
                </p>

            </div>

            <div className={styles.image3}>
                <img className={styles.img3} src="img3.svg" />
            </div>
            
        </div>

        <div className={styles.pageInit4}>
            <div className={styles.image4}>
                <img className={styles.img4} src="img4.svg"/>
            </div>

            <div className={styles.text4}>
                <h1>Leia em qualquer lugar e de qualquer maneira.</h1>

                <p>Pesquise por qualquer livro em mídia 
                    digital para adicionar em todos os seus disposítivos</p>
            </div>
            
        </div>

        

        </>
    )
}