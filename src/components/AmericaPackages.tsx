import "./AmericaPackages.css";

function AmericaPackages() {
  return (
    <main className="america">
      <h1 className="america__title">
        Viajes a América 2027
      </h1>

      <p className="america__description">
        Descubre los mejores destinos de América
        con 4 Dioses Viajes.
      </p>

      <section className="america__packages">
  <article className="america__card">
    <img
      src="/paquetes-internacionales/america/colombia-esencial.png"
      alt="Paquete Colombia Esencial 2027"
      className="america__card-image"
    />

    <div className="america__card-content">
      <h2>Colombia Esencial 2027</h2>

      <p>✈️ Salida desde Guadalajara, Jalisco</p>

      <p>
        Descubre los encantos de Colombia
        con 4 Dioses Viajes.
      </p>
    </div>
  </article>
</section>
    </main>
  );
}

export default AmericaPackages;