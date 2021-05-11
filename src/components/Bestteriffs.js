import logo from "../images/brands_all.png";
function Bestteriffs() {
  return (
    <section className="container text-center">
      <h2 className="brands_all_text">
        Die <strong>besten Tarife</strong> unserer{" "}
        <strong>Top-Versicherer</strong>
      </h2>
      <img className="mt-4 mb-4 brands_all" src={logo} alt="" />
    </section>
  );
}

export default Bestteriffs;
