import a from "../images/logo-vhv.jpg";
function Example() {
  return (
    <>
    <div className="table-desk">
    <div className="container mb-5 ">
      <h4 className="pt-1 pb-3">Unfall­versicherung (ab 1,09 € mtl.)</h4>
      <div className="ex_card pb-3">
        <main className="py-2 pl-2 mb-2">
          Tarif: Basler-Silber (ohne Gesundheitsprüfung)
        </main>

        <div className="row px-2 pb-4">
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="col-lg-3"
          >
            <div>
              <img src={a} alt="" />
            </div>
          </div>
          <div className="col-lg-3">
            <span>
              Mehrleistung Gliedertax.: 61% <br />
              Grundsumme: 25.000 € <br />
              Progression: 100%
            </span>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-2">
            <h3 style={{ color: "#037f8c", fontWeight: 700 }}>13,09 €</h3>
            <span>jährlich</span>
          </div>
          <div className="col-lg-1"></div>
        </div>
        <span className="px-2 mb-3">
          * Geburtsjahr 1990, 25qm Wohnfläche, Wertsachen 20.000 €
        </span>
      </div>
    </div>
    </div>


    <div className="table-mobile">
    <div className="container mb-5 ">
      <h4 className="pt-1 pb-3">Unfall­versicherung (ab 1,09 € mtl.)</h4>
      <div className="ex_card pb-3">
        <main className="py-2 pl-2 mb-2">
          Tarif: Basler-Silber (ohne Gesundheitsprüfung)
        </main>

        <div className="grid_Mobile">
          <div className="grid_Mobile">
          <div
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <img src={a} alt="" />
            </div>
          </div>
          <div style={{ fontSize:14 , marginLeft:21, marginRight:21}}>
            <span>
              Mehrleistung Gliedertax.: 61% <br />
              Grundsumme: 25.000 € <br />
              Progression: 100%
            </span>
          </div>
        
          <div className="">
            <h3 style={{ color: "#037f8c", fontWeight: 700, fontSize:18 }}>13,09 <br /> €</h3>
            <span>jährlich</span>
          </div>
         
        </div>
        </div>
        <span style={{fontSize:15 }}>
          * Geburtsjahr 1990, 25qm Wohnfläche, Wertsachen 20.000 €
        </span>
      </div>
    </div>
    </div>
    </>
    
  );
}

export default Example;
