import { Link } from "react-router-dom";
import React, { useState } from "react";
import Slider from "../../slider/Slider";
function Screen2() {
  const [clicked1, setClicked1] = useState(true);
  const [clicked2, setClicked2] = useState(true);
  const myCallBack = (statefromchild) => {
   
  }
  return (
    <div className="container mb-5 colored  scr10 step10 d-flex flex-column  justify-content-center align-items-center">
      <h4 style={{ fontWeight: 400 }}>
        <strong>Wieviel Wohnfläche </strong> sollen versichert werden?
      </h4>

      <main className="row default_wrapper">
      <div className="sl">
              <Slider
        
                left_text="<50 m²"
                right_text=">500 m²"
                value="0"
                min="0"
                max="450"
                step="150"
                unit="m²"
                text="Alternativ eintippen"
                callBackFromParent={myCallBack}
              />
            </div>
        <Link style={{ margin: "0 10px", width: "100%" }} to="/Step4">
          <button>
            <i class="fas fa-angle-right" aria-hidden="true"></i> WEITER
          </button>
        </Link>
        <p className="pp text-center">
        <i className="fas fa-lock mr-1" aria-hidden="true"></i>
        Ihre Daten werden vertraulich behandelt und nicht an Dritte
        weitergegeben.
      </p>
      </main>
    </div>
  );
}

export default Screen2;
