import ShowcaseImg from "../images/ShowcaseImg.png";
function Header() {
  return (
    <>
    <header className="header-banner">
      <div className="container">
        <div className="row ">
          <div className="col-sm-7">
            <img width="55%" src={ShowcaseImg} alt="" />
          </div>
          <div className="col-sm-5 ">
            <div>
              <h1 >Hier fallen </h1>
              <br />
              <h1>die Preise</h1>
              <h2>Versicherung ab 1 € </h2>
            </div>
          </div>
        </div>
      </div>
    </header>

    <header className="header-mobile">
    <div className="container">
      <div className="mobile">
        <div className="header_mobile_container">
          <img width="25%" src={ShowcaseImg} alt="" />
          <div className="header_mobile_text">
            <h4 >Hier fallen die Preise</h4>
            <h5>Versicherung ab 1 € </h5>
          </div>
        </div>
      </div>
    </div>
  </header>
  </>
  );
}

export default Header;
