import icon from "../images/icon.svg";
function Bestteriffs() {
  return (
    <section className="cons_container">
      <div className="container ">
        <div className="row d-flex align-items-end">
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <h2>hre Vorteile</h2>
            <ul>
              <li>Versicherungsvergleich spart bis zu 80%</li>
              <li>Beste Leistungen - passend zu Ihrem Bedarf</li>
              <li>Ausgezeichnet: Versicherer mit Bestleistungen</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-3">
            <img width="100px" src={icon} alt="" />
          </div>
          <div className="col-lg-2 col-md-6 mb-3">
            <span>
              Kundenbewertungen <br />
              1-euro-versicherung.de
            </span>
            <div>
              <span>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star" aria-hidden="true"></i>
                <i class="fas fa-star-half" aria-hidden="true"></i>{" "}
                <strong>4.7</strong> / 5.0
              </span>
            </div>
          </div>

          <div className="col-lg-1"></div>
        </div>
      </div>
    </section>
  );
}

export default Bestteriffs;
