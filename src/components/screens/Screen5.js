import { Link } from "react-router-dom";

import React, { useState } from "react";
function Default() {
  const [clicked1, setClicked1] = useState(true);
  const [clicked2, setClicked2] = useState(true);
  const [clicked3, setClicked3] = useState(true);
  const [clicked4, setClicked4] = useState(true);
  return (
    <div className="container mb-5 colored step5 d-flex flex-column  justify-content-center align-items-center">
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
          <i class="fas fa-dog" aria-hidden="true"></i>
          <h3>1 Hund</h3>
        </div>
        <div
          onClick={() => setClicked2(!clicked2)}
          className={
            clicked2
              ? "col-xs-6 px-2 default_box"
              : "col-xs-6 px-2 default_box theme_bg"
          }
        >
          <i class="fas fa-dog" aria-hidden="true"></i>
          <h3>2 Hund</h3>
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
          <h3>3 Hund</h3>
        </div>
        <div
          onClick={() => setClicked4(!clicked4)}
          className={
            clicked4
              ? "col-xs-6 px-2 default_box"
              : "col-xs-6 px-2 default_box theme_bg"
          }
        >
          <i class="fas fa-dog" aria-hidden="true"></i>
          <h3>4 und mehr</h3>
        </div>
        <Link style={{ margin: "0 10px", width: "100%" }} to="/Step6">
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
