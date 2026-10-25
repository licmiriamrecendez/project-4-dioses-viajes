import { useState } from "react";
import "./Groups.css";

function Groups() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  return (
    <main className="groups">
      <h1>💍 Bodas en la Playa y Viajes en Grupo</h1>

      <p>
        Organizamos momentos inolvidables: bodas en la playa,
        viajes familiares, empresariales, escolares y con amigos.
        ¡Pregunta a tu agente favorito!
      </p>

      <img
  src="/grupos/bodas-y-grupos.png"
  alt="Bodas en la playa y viajes para grupos familiares, empresariales, escolares y de amigos"
  className="groups__image"
  onClick={() => setIsImageOpen(true)}
/>

      <h2>¡Cotiza tu próximo evento o viaje en grupo!</h2>

      <a
        href={`https://wa.me/523310626088?text=${encodeURIComponent(
          "Hola, quiero solicitar una cotización para una boda en la playa o un viaje en grupo con 4 Dioses Viajes."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="groups__whatsapp"
      >
        💬 Solicitar cotización por WhatsApp
      </a>
      {isImageOpen && (
  <div
    className="groups__modal"
    onClick={() => setIsImageOpen(false)}
  >
    <button
      type="button"
      className="groups__modal-close"
      onClick={() => setIsImageOpen(false)}
      aria-label="Cerrar imagen"
    >
      ✕
    </button>

    <img
      src="/grupos/bodas-y-grupos.png"
      alt="Bodas en la playa y viajes en grupo ampliados"
      className="groups__modal-image"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
    </main>
  );
}

export default Groups;