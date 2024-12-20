import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import styles from "./Favorites.module.css"



function Favorites(){
    return(
        <>
            <Header/>
            <Container>
                <section className={styles.favorite}>
                    <h2>Meus favoritos</h2>
                    Lista de Favoritos
                </section>
            </Container>
            <Footer/>
        </>
    )
}

export default Favorites;