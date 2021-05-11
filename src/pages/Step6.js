import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Screen6 from "../components/screens/Screen6";
import Map from "../components/Map";
import Why1euro from "../components/Why1euro";
import Example from "../components/Example";
import Cons from "../components/Cons";
import Bestteriffs from "../components/Bestteriffs";
import Footer from "../components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <section
        style={{
          backgroundColor: "rgba(26, 198, 218, .1)",
          paddingTop: "38px",
        }}
      >
        <div className="container text-center">
          <h2 style={{ fontWeight: "700", color: "#1ac6da" }}>
            Versicherung ab 1 €
          </h2>
          <p>
            Finden Sie <strong>günstige Tarife</strong>
          </p>

          <Screen6 /><br />
        </div>
      </section>
      <Map />
      <Cons />
      <div className="container">
        <h2>Tarif-Beispiele</h2>
      </div>
      <Example />
      <Example />
      <Example />
      <Example />
      <Example />
      <Why1euro />
      <Bestteriffs />
      <Footer />
    </div>
  );
}

export default App;
