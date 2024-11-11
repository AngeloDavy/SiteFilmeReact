import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./PageNotFound.module.css"
import erro404 from './erro404.png'

function PageNotFound(){
    return(
        <>
        <Header />
            <section className={styles.container}>
                <h2>Opss! Conteúdo não encotrado!</h2>
                <img src={erro404} alt="Logo de página não localizada"/>
            </section>
        <Footer />
        </>
    )
}

export default PageNotFound;