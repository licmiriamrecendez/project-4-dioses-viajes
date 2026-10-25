
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p className="footer__address">
          📍 Anesagasti #174, Col. Tonalá Centro,
          Tonalá, Jalisco, C.P. 45400
        </p>

        <p className="footer__hours">
          🕒 Lunes a viernes: 10:00 a.m. a 3:00 p.m.
          y 5:00 p.m. a 7:00 p.m.
        </p>

        <p className="footer__hours">
          Sábados: 10:00 a.m. a 2:00 p.m.
        </p>
      </div>

      <p className="footer__copyright">
        © {new Date().getFullYear()} 4 Dioses Viajes.
        Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
