import logo from "../images/logo.png";
function Narbar() {
  return (
    <nav className="">
      <div className="container d-flex justify-content-between">
        <img src={logo} alt="" />

        <div>
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
