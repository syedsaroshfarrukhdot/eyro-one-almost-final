import React, { useState } from "react";
import { Link } from "react-router-dom";
function Default() {
  const [clicked1, setClicked1] = useState(true);
  const [clicked2, setClicked2] = useState(true);
  const [clicked3, setClicked3] = useState(true);
  const [clicked4, setClicked4] = useState(true);
  return (
    <div className="container mb-5 colored screen6 step6 d-flex flex-column  justify-content-center align-items-center">
      <h4 style={{ fontWeight: 400 }}>
        Welche Absicherungen <strong>wünschen</strong> Sie?
        <br />
        <small style={{ color: "#777", fontSize: "12px" }}>
          (Mehrfach&shy;auswahl möglich)
        </small>
      </h4>

      <main className="row default_wrapper">
      <Link className="form_btn_big" to="/Step7">
        <div
          onClick={() => setClicked1(!clicked1)}
          className={
            clicked1
              ? "col-xs-6 px-2 default_box"
              : "col-xs-6 px-2 default_box theme_bg"
          }
        >
          <h3> Angestellte/r</h3>
        </div>
        </Link>
        <Link className="form_btn_big" to="/Step7">
          <div
            onClick={() => setClicked2(!clicked2)}
            className={
              clicked2
                ? "col-xs-6 px-2 default_box"
                : "col-xs-6 px-2 default_box theme_bg b"
            }
          >
            <h3> Beamte/r</h3>
          </div>
        </Link>
        <Link className="form_btn_big" to="/Step7">
        <div
          onClick={() => setClicked3(!clicked3)}
          className={
            clicked3
              ? "col-xs-6 px-2 default_box"
              : "col-xs-6 px-2 default_box theme_bg"
          }
        >
          <h3> Selbstständige/r</h3>
        </div>
        </Link>
        <Link className="form_btn_big" to="/Step7">
        <div
          onClick={() => setClicked4(!clicked4)}
          className={
            clicked4
              ? "col-xs-6 px-2 default_box"
              : "col-xs-6 px-2 default_box theme_bg"
          }
        >
          <h3> Student / Schüler</h3>
        </div>
        </Link>
        <Link className="form_btn_big" to="/Step7">
        <div
          onClick={() => setClicked4(!clicked4)}
          className={
            clicked4
              ? "col-xs-6 px-2 default_box"
              : "col-xs-6 px-2 default_box theme_bg"
          }
        >
          <h3> Hausfrau/mann</h3>
        </div>
        </Link>
        <Link className="form_btn_big" to="/Step7">
        <div
          onClick={() => setClicked4(!clicked4)}
          className={
            clicked4
              ? "col-xs-6 px-2 default_box"
              : "col-xs-6 px-2 default_box theme_bg"
          }
        >
          <h3> Rentner/in</h3>
        </div>
        </Link>
        <Link className="form_btn_big" to="/Step7">
        <div
          onClick={() => setClicked4(!clicked4)}
          className={
            clicked4
              ? "col-xs-6 px-2 default_box"
              : "col-xs-6 px-2 default_box theme_bg"
          }
        >
          <h3> Arbeitssuchend</h3>
        </div>
        </Link>
        <Link className="form_btn_big" to="/Step7">
        <div
          onClick={() => setClicked4(!clicked4)}
          className={
            clicked4
              ? "col-xs-6 px-2 default_box"
              : "col-xs-6 px-2 default_box theme_bg"
          }
        >
          <h3> Sonstiges</h3>
        </div>
        </Link>
        
      </main>
    </div>
  );
}

export default Default;