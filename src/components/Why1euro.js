import logo from "../images/couple.jpg";
function Why1euro() {
  return (
    <section className="why1euro_container">
      <div className="container">
        <div className="row">
          <section className="col-lg-8">
            <h2>
              <strong>Warum</strong> ist <strong>1-euro-versicherung.de</strong>{" "}
              für Sie <strong>die richtige Adresse</strong>?
            </h2>
            <p>
              Weil Sie ein unabhängiges Expertenteam mit jahrelanger Erfahrung
              berät
            </p>
            <ul>
              <li className="icon-check">
                Wir finden für Sie die
                <strong>passenden Tarife aus 2021/2022</strong>
              </li>
              <li>
                Wir blicken auf <strong>15 Jahre Erfahrung</strong> rund um die
                Hausrat-, Privat&shy;haftpflicht-, Hunde&shy;haftpflicht- und
                Rechts&shy;schutz&shy;versicherung zurück.
              </li>
              <li>
                Wir sind <strong>spezialisierte Berater</strong> und setzen auf
                die <strong>besten Tarife</strong> für Sie.
              </li>
            </ul>
          </section>
          <div className="col-lg-4 d-lg-block d-none">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why1euro;
