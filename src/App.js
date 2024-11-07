import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CategoryMap from "./components/RepetCategory";

function App() {
  return (
    <div>
      <Header />
      <Banner image="home" />
      <Container>
        <CategoryMap />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
