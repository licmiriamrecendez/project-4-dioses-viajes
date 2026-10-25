import { useState } from "react";
import "./Flights.css";

function Flights() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  return (
    <main className="flights">
      <h1>✈️ Vuelos Nacionales e Internacionales</h1>

      <p>
        En 4 Dioses Viajes te ayudamos a encontrar
        vuelos para tus próximas vacaciones,
        viajes familiares o de negocios.
      </p>

      <img
  src="/vuelos/aerolineas.png"
  alt="Aerolíneas nacionales e internacionales"
  className="flights__airlines-image"
  onClick={() => setIsImageOpen(true)}
/>

      <h2>¡Cotiza tu próximo vuelo con nosotros!</h2>

      <a
  href={`https://wa.me/523310626088?text=${encodeURIComponent(
    "Hola, quiero cotizar un vuelo con 4 Dioses Viajes.\n" +
    "Origen: \n" +
    "Destino: \n" +
    "Fecha de salida: \n" +
    "Fecha de regreso: \n" +
    "Número de personas (adultos y menores con edades): \n" +
    "Equipaje que necesito (mochila, maleta de mano o documentada): "
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="flights__whatsapp"
>
  ✈️ Solicitar cotización por WhatsApp
</a>

{isImageOpen && (
  <div
    className="flights__modal"
    onClick={() => setIsImageOpen(false)}
  >
    <button
      type="button"
      className="flights__modal-close"
      onClick={() => setIsImageOpen(false)}
      aria-label="Cerrar imagen"
    >
      ✕
    </button>

    <img
      src="/vuelos/aerolineas.png"
      alt="Aerolíneas nacionales e internacionales ampliadas"
      className="flights__modal-image"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
    </main>
  );
}

export default Flights;