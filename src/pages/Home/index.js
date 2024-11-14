import { useState } from "react";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CategoryMap from "../../components/RepetCategory";

function Home() {

  function pegarNome(e){
    setNome(e.target.value)
  }

  const [nome, setNome] = useState()

  return (
    <div>
      <Header />
      <Banner image="home" />
      <Container>

      <input 
        type="text"
        placeholder="Nome"
        onChange={pegarNome}
      />
      <h2>{nome}</h2>

        {/*<CategoryMap />*/}
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
