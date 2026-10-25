import { useState } from "react";
import "./Excursions.css";

const excursions = [
  {
    title: "Huasteca Potosina",
    date: "Del 26 al 29 de noviembre de 2026",
    price: "Desde $3,790 MXN por persona",
    image: "/excursiones/la-huasteca.png",
  },
  {
    title: "La Tovara y Playa Las Islitas",
    date: "8 de noviembre de 2026",
    price: "$1,190 MXN por persona",
    image: "/excursiones/la-tovara.png",
  },
];

function Excursions() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <main className="excursions">
      <h1 className="excursions__title">
        Nuestras Excursiones
      </h1>

      <p className="excursions__description">
        Descubre lugares increíbles y vive experiencias
        inolvidables con 4 Dioses Viajes.
      </p>

      <div className="excursions__grid">
        {excursions.map((excursion) => (
          <article
            className="excursions__card"
            key={excursion.title}
          >
            <button
  type="button"
  className="excursions__image-button"
  onClick={() => setSelectedImage(excursion.image)}
  aria-label={`Ampliar folleto de ${excursion.title}`}
>
  <img
    src={excursion.image}
    alt={`Folleto de ${excursion.title}`}
    className="excursions__image"
    loading="lazy"
  />
</button>

            <h2>{excursion.title}</h2>
            <p>{excursion.date}</p>
            <p className="excursions__price">
              {excursion.price}
            </p>

            <a
  href={`https://wa.me/523310626088?text=${encodeURIComponent(
    `Hola, me gustaría recibir información sobre la excursión a ${excursion.title}.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="excursions__whatsapp"
>
  💬 Solicitar información por WhatsApp
</a>
          </article>
        ))}
      </div>

      {selectedImage && (
  <div
    className="excursions__modal"
    onClick={() => setSelectedImage(null)}
    role="presentation"
  >
    <button
      type="button"
      className="excursions__modal-close"
      onClick={() => setSelectedImage(null)}
      aria-label="Cerrar imagen"
    >
      ×
    </button>

    <img
      src={selectedImage}
      alt="Folleto de excursión ampliado"
      className="excursions__modal-image"
      onClick={(event) => event.stopPropagation()}
    />
  </div>
)}
    </main>
  );
}

export default Excursions;