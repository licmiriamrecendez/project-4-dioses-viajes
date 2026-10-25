import { useState } from "react";
import "./MonthlyPromotions.css";

const promotions = [
  {
    title: "Hotel Playa Mazatlán 🎃",
    date: "Del 29 de octubre al 1 de noviembre de 2026",
    price: "$11,996 MXN por 2 adultos",
    description: "Todo incluido · 4 días y 3 noches · Hasta 2 menores de 12 años gratis",
    image: "/promociones/playa-mazatlan-halloween.jpeg",
  },
  {
    title: "Friendly Fun Vallarta 👻",
    date: "Del 29 de octubre al 1 de noviembre de 2026",
    price: "$10,878 MXN por 2 adultos",
    description: "Todo incluido · 4 días y 3 noches · Hasta 2 menores de 12 años gratis",
    image: "/promociones/friendly-fun-vallarta-halloween.jpeg",
  },
];

function MonthlyPromotions() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <main className="promotions">
      <h1 className="promotions__title">
        Promociones del mes 🏷️
      </h1>

      <p className="promotions__description">
        Descubre nuestras promociones especiales
        y encuentra tu próximo viaje.
      </p>

      <div className="promotions__grid">
        {promotions.map((promotion) => (
          <article
            className="promotions__card"
            key={promotion.title}
          >
            <button
  type="button"
  className="promotions__image-button"
  onClick={() => setSelectedImage(promotion.image)}
  aria-label={`Ampliar folleto de ${promotion.title}`}
>
  <img
    src={promotion.image}
    alt={`Promoción de ${promotion.title}`}
    className="promotions__image"
    loading="lazy"
  />
</button>

            <h2>{promotion.title}</h2>
            <p>{promotion.date}</p>
            <p>{promotion.description}</p>

            <p className="promotions__price">
              {promotion.price}
            </p>

            <a
  href={`https://wa.me/523310626088?text=${encodeURIComponent(
    `Hola, me gustaría recibir información sobre la promoción de ${promotion.title}.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="promotions__whatsapp"
>
  💬 Solicitar información por WhatsApp
</a>
          </article>
        ))}
      </div>

            <section className="promotions__custom">
        <h2>✈️ ¿No encuentras el destino o la fecha que buscas?</h2>

        <p>
          ¡No te preocupes! En 4 Dioses Viajes te ayudamos
          a encontrar el viaje ideal para ti.
        </p>

        <p>
          Envíanos un WhatsApp con el destino, las fechas y
          los detalles de lo que estás buscando, y con gusto
          te preparamos una cotización personalizada.
        </p>

        <a
          href={`https://wa.me/523310626088?text=${encodeURIComponent(
            "¡Hola! Quiero una cotización personalizada. Mi destino es: ___, mis fechas son: ___ y viajamos ___ personas."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="promotions__custom-button"
        >
          💬 Cotiza tu viaje por WhatsApp
        </a>
      </section>

      {selectedImage && (
  <div
    className="promotions__modal"
    onClick={() => setSelectedImage(null)}
    role="presentation"
  >
    <button
      type="button"
      className="promotions__modal-close"
      onClick={() => setSelectedImage(null)}
      aria-label="Cerrar imagen"
    >
      ×
    </button>

    <img
      src={selectedImage}
      alt="Folleto de promoción ampliado"
      className="promotions__modal-image"
      onClick={(event) => event.stopPropagation()}
    />
  </div>
)}
    </main>
  );
}

export default MonthlyPromotions;