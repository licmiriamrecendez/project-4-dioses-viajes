import { Link } from "react-router-dom";
import Categories from "./Categories";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__brand">
  <Link to="/" className="header__home-link">
    <img
      src="/images/logo-4-dioses.png"
      alt="4 Dioses Viajes - Ir al inicio"
      className="header__logo"
    />
  </Link>

  <p className="header__subtitle">
    Tu próxima aventura comienza aquí
  </p>
</div>

<Categories />

<div className="header__social">
      <a
        className="header__whatsapp"
        href="https://wa.me/523310626088?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20los%20viajes%20de%204%20Dioses%20Viajes."
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width="26"
  height="26"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#25D366"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  <path d="M9 9a5 5 0 0 0 6 6" />
</svg>
<span>33 1062 6088</span>
      </a>

      <a
  className="header__facebook"
  href="https://www.facebook.com/4Diosesviajes"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="#1877F2"
  aria-hidden="true"
>
  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
</svg>
  <span>Facebook</span>
</a>

</div>
    </header>
  );
}

export default Header;