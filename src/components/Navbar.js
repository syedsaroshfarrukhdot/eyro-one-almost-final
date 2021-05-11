import logo from "../images/logo.png";
function Narbar() {
  return (
    <nav className="py-2">
      <div className="container d-flex justify-content-between">
        <img className="logo" src={logo} alt="" />

        <div className="nav_bar_container">
          <span>Kundenbewertungen</span>
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
      </div>
    </nav>
  );
}

export default Narbar;
