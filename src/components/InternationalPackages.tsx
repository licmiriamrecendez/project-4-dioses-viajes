import { Link } from "react-router-dom";
import "./InternationalPackages.css";

function InternationalPackages() {
  return (
    <main className="international">
      <h1 className="international__title">
        Paquetes Internacionales 2027
      </h1>

      <p className="international__description">
        Descubre el mundo con 4 Dioses Viajes.
        Selecciona el continente que deseas visitar.
      </p>

      <nav
        className="international__continents"
        aria-label="Continentes"
      >
        <Link to="/paquetes-internacionales/america">
          🌎 América
        </Link>

        <Link to="/paquetes-internacionales/asia">
          🌏 Asia
        </Link>

        <Link to="/paquetes-internacionales/europa">
          🌍 Europa
        </Link>
      </nav>
    </main>
  );
}

export default InternationalPackages;