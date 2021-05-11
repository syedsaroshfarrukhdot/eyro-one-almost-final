import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const StepOne = ({ }) => {
  
  return (
<div class="colored">
    <h4 style={{ fontWeight: 400 }}>
    Wie kann ich Sie zur <strong>Angebotserstellung erreichen?</strong>
<br />
</h4>
    <form class="row default_wrapper screen9 step9 needs-validation" novalidate>

    <div class="form-row ">
      <div class="form-group col-md-6">
        <label   className="form-label l">Vor- / Nachname:</label>
        <input class=" str form-control" id="validationCustom01" placeholder="LHR NAME" required/>
        
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label className="form-label l">Telefon::</label>
        <input type="text" class=" str form-control" placeholder="Ihre Telefonnummer" required/>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label className="form-label l">E-Mail:</label>
        <input type="email" class=" str form-control" placeholder="Ihre E-Mail Adresse" required/>
      </div>
    </div>
    <Link style={{ margin: "0 10px", width: "100%" }} to="/Step2">
          <button>
            <i class="fas fa-paper-plane" aria-hidden="true"></i>  JETZT ANGEBOT ERHALTEN
          </button>
        </Link>
        <p className="pp text-center">
        <i className="fas fa-lock mr-1" aria-hidden="true"></i>
        Ihre Daten werden vertraulich behandelt und nicht an Dritte
        weitergegeben.
      </p>
  </form>
</div>
  );
};

export default StepOne;
