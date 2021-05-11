import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const StepOne = ({ }) => {
  
  return (
< div class="colored">
    <h4 style={{ fontWeight: 400 }}>
    Angaben zu <strong>Ihrem Wohnort </strong>
<br />
</h4>
    <form class="row default_wrapper screen8 step8 needs-validation" novalidate>

    <div class="form-row ">
      <div class="form-group col-md-6">
        <label  for="validationCustom01" className="form-label lab">PLZ</label>
        <input class="plz form-control" id="validationCustom01" placeholder="PLZ" required/>
      </div>
      <div class="form-group col-md-6">
        <label className="lab2">Ort</label>
        <input class=" ort form-control" placeholder="ORT" required/>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label className="lab">Straße:</label>
        <input type="text" class=" str form-control" placeholder="Straße / Nr" required/>
      </div>
      <div class="form-group col-md-6">
        <label className="lab3">Nr:</label>
        <input type="text" class="nr form-control" placeholder="1 A" required/>
      </div>
    </div>
    <Link style={{ margin: "0 10px", width: "100%" }} to="/Step9">
          <button className="b">
            <i class="fas fa-angle-right" aria-hidden="true"></i> WEITER
          </button>
        </Link>
        <p className="text-center">
        <i className="fas fa-lock mr-1" aria-hidden="true"></i>
        Ihre Daten werden vertraulich behandelt und nicht an Dritte
        weitergegeben.
      </p>
  </form>
</ div>
  );
};

export default StepOne;
