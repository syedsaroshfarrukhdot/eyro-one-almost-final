import React, { useState } from "react";
import { Link } from "react-router-dom";
function Default() {
  const [clicked1, setClicked1] = useState(true);
  const [clicked2, setClicked2] = useState(true);
  const [clicked3, setClicked3] = useState(true);
  const [clicked4, setClicked4] = useState(true);
  return (
    <div className="container def mb-5 colored d-flex flex-column  justify-content-center align-items-center">
      <h4 style={{ fontWeight: 400 }}>
        Welche Absicherungen <strong>wünschen</strong> Sie?
        <br />
        <small style={{ color: "#777", fontSize: "12px" }}>
          (Mehrfach&shy;auswahl möglich)
        </small>
      </h4>

      <main className="row default_wrapper">
        <div
          onClick={() => setClicked1(!clicked1)}
          className={
            clicked1
              ? "col-xs-6 px-2 default_box"
              : "col-xs-6 px-2 default_box theme_bg"
          }
        >
          <i class="fas fa-home" aria-hidden="true"></i>
          <h3>
            Hausrat- <br />
            versicherung
          </h3>
        </div>
        <div
          onClick={() => setClicked2(!clicked2)}
          className={
            clicked2
              ? "col-xs-6 px-2 default_box"
              : "col-xs-6 px-2 default_box theme_bg"
          }
        >
          <i class="fas fa-user-shield" aria-hidden="true"></i>
          <h3>
            Privathaftpflicht- <br />
            versicherung
          </h3>
        </div>
        <div
          onClick={() => setClicked3(!clicked3)}
          className={
            clicked3
              ? "col-xs-6 px-2 default_box"
              : "col-xs-6 px-2 default_box theme_bg"
          }
        >
          <i class="fas fa-dog" aria-hidden="true"></i>
          <h3>
            Hundehaftpflicht-
            <br />
            versicherung
          </h3>
        </div>
        <div
          onClick={() => setClicked4(!clicked4)}
          className={
            clicked4
              ? "col-xs-6 px-2 default_box"
              : "col-xs-6 px-2 default_box theme_bg"
          }
        >
          <i class="fas fa-gavel" aria-hidden="true"></i>
          <h3>
            Rechtsschutz- <br />
            versicherung
          </h3>
        </div>
        <Link style={{ margin: "0 10px", width: "100%", justifyContent: "center" }} to="/Step2">
          <button>
            <i class="fas fa-angle-right" aria-hidden="true"></i> WEITER
          </button>
        </Link>
        <p className="text-center">
        <i className="fas fa-lock mr-1" aria-hidden="true"></i>
        Ihre Daten werden vertraulich behandelt und nicht an Dritte
        weitergegeben.
      </p>
      </main>
    </div>
   
  );
}

export default Default;
