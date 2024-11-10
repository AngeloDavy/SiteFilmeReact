import styles from "./PageNotFound.module.css"
import erro404 from './erro404.png'

function PageNotFound(){
    return(
        <>
            <section className={styles.container}>
                <h2>Opss! Conteúdo não encotrado!</h2>
                <img src={erro404} alt="Logo de página não localizada"/>
            </section>
        </>
    )
}

export default PageNotFound;