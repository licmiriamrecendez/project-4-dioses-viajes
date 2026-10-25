import "./BeachTrips.css";

const beachTrips = [
  {
    hotel: "Krystal Grand Puerto Vallarta",
    destination: "Puerto Vallarta",
    image: "/hoteles/krystal-grand-puerto-vallarta.jpg",
    dates: "12 al 15 de marzo de 2027",
    pricePerPerson: 7497,
    priceForTwo: 14994,
    promotion: "Menores  de 6 a 12 años.",
  },
  {
    hotel: "Hotel Xcaret México",
    destination: "Riviera Maya",
    image: "/hoteles/hotel-xcaret-mexico.jpg",
    dates: "17 al 20 de marzo de 2027",
    pricePerPerson: 25302,
    priceForTwo: 50604,
    promotion: "Menores de 6 a 17 años gratis.",
  },
  {
    hotel: "Hilton Vallarta Riviera",
    destination: "Puerto Vallarta",
    image: "/hoteles/hilton-vallarta-riviera.jpg",
    dates: "25 al 28 de marzo de 2027",
    pricePerPerson: 14400,
    priceForTwo: 28800,
    promotion: "Menores y juniors gratis.",
  },
  {
    hotel: "Hilton Vallarta Riviera",
    destination: "Puerto Vallarta",
    image: "/hoteles/hilton-vallarta-riviera.jpg",
    dates: "1 al 4 de abril de 2027",
    pricePerPerson: 11835,
    priceForTwo: 23670,
    promotion: "Menores y juniors gratis.",
  },
  {
    hotel: "Holiday Inn Resort Ixtapa",
    destination: "Ixtapa",
    image: "/hoteles/holiday-inn-ixtapa.jpg",
    dates: "29 de abril al 2 de mayo de 2027",
    pricePerPerson: 7002,
    priceForTwo: 14004,
    promotion: "2 menores de hasta 12 años gratis.",
  },
  {
    hotel: "Costa Club Punta Arena",
    destination: "Puerto Vallarta",
    image: "/hoteles/costa-club-punta-arena.jpg",
    dates: "29 de abril al 2 de mayo de 2027",
    pricePerPerson: 4980,
    priceForTwo: 9960,
    promotion: "Promoción 2×1 en menores.",
  },
  {
    hotel: "Holiday Inn Resort Ixtapa",
    destination: "Ixtapa",
    image: "/hoteles/holiday-inn-ixtapa.jpg",
    dates: "2 al 5 de mayo de 2027",
    pricePerPerson: 6564,
    priceForTwo: 13128,
    promotion: "2 menores de hasta 12 años gratis.",
  },
  {
    hotel: "Krystal Vallarta Hotel & Resort",
    destination: "Puerto Vallarta",
    image: "/hoteles/krystal-vallarta.jpg",
    dates: "3 al 6 de mayo de 2027",
    pricePerPerson: 5715,
    priceForTwo: 11430,
    promotion: "2 menores de hasta 12 años gratis.",
  },
  {
    hotel: "Crown Paradise Club Puerto Vallarta",
    destination: "Puerto Vallarta",
    image: "/hoteles/crown-paradise-club-vallarta.jpg",
    dates: "3 al 6 de mayo de 2027",
    pricePerPerson: 6720,
    priceForTwo: 13440,
    promotion: "2 menores de hasta 12 años gratis.",
  },
  {
    hotel: "Krystal Vallarta Hotel & Resort",
    destination: "Puerto Vallarta",
    image: "/hoteles/krystal-vallarta.jpg",
    dates: "6 al 9 de mayo de 2027",
    pricePerPerson: 6351,
    priceForTwo: 12702,
    promotion: "2 menores de hasta 12 años gratis.",
  },
  {
    hotel: "Holiday Inn Resort Ixtapa",
    destination: "Ixtapa",
    image: "/hoteles/holiday-inn-ixtapa.jpg",
    dates: "9 al 12 de mayo de 2027",
    pricePerPerson: 6564,
    priceForTwo: 13128,
    promotion: "2 menores de hasta 12 años gratis.",
  },
  {
    hotel: "Krystal Vallarta Hotel & Resort",
    destination: "Puerto Vallarta",
    image: "/hoteles/krystal-vallarta.jpg",
    dates: "10 al 13 de mayo de 2027",
    pricePerPerson: 5715,
    priceForTwo: 11430,
    promotion: "2 menores de hasta 12 años gratis.",
  },
];

function BeachTrips() {
  return (
    <main className="beach">
      <h1 className="beach__title">
  🏖️ Promociones de Playa con Menores GRATIS
</h1>

<p className="beach__description">
  ¡Disfruta unas vacaciones familiares increíbles!
  Aprovecha nuestras promociones de hospedaje
  CON MENORES GRATIS en hoteles seleccionados.
  <br />
  <strong>
    ⭐ Solo en  en Costa Club Punta Arena:
    menores 2x1.
  </strong>
</p>

      <div className="beach__grid">
  {beachTrips.map((trip) => (
    <article
  className="beach__card"
  key={`${trip.hotel}-${trip.dates}`}
>
  {"image" in trip && typeof trip.image === "string" && (
    <img
      className="beach__image"
      src={trip.image}
      alt={`Hotel ${trip.hotel}`}
      loading="lazy"
    />
  )}

  <h2>{trip.hotel}</h2>

      <p className="beach__destination">
        📍 {trip.destination}
      </p>

      <p className="beach__dates">
        📅 {trip.dates}
      </p>

      <p>🏖️ Todo incluido · 4 días y 3 noches</p>

      <div className="beach__prices">
        <div>
          <span>Por persona en habitación doble</span>
          <strong>
            ${trip.pricePerPerson.toLocaleString("es-MX")} MXN
          </strong>
        </div>

        <div>
          <span>Total por 2 adultos</span>
          <strong>
            ${trip.priceForTwo.toLocaleString("es-MX")} MXN
          </strong>
        </div>
      </div>

      <p className="beach__promotion">
  🎁{" "}
  {trip.hotel === "Costa Club Punta Arena"
    ? "MENORES 2X1 — Paga uno y el otro entra gratis."
    : `MENORES GRATIS — ${trip.promotion
        .replace(/menores gratis/gi, "")
        .replace(/menores y juniors gratis/gi, "Menores y juniors")
        .replace(/2 menores de hasta 12 años gratis/gi, "Hasta 2 menores de 12 años")
        .replace(/menores de 6 a 17 años gratis/gi, "De 6 a 17 años")
        .replace(/menores gratis de 6 a 12 años/gi, "De 6 a 12 años")
        .trim()}`}
</p>

      <p className="beach__transport">
  🚍✈️ ¡Completa tu viaje! Podemos agregar transporte
  terrestre o aéreo a tu paquete.
  <br />
  <strong>
    Transporte no incluido en el precio.
    Se cotiza por separado.
  </strong>
</p>

      <p className="beach__disclaimer">
  Precios en pesos mexicanos (MXN) por 3 noches de hospedaje,
  calculados en habitación doble para 2 adultos.
  Las promociones para menores están sujetas a edades,
  ocupación permitida y condiciones de cada hotel.
  Tarifas sujetas a cambios y disponibilidad.
  Transporte no incluido.
</p>

      <a
  className="beach__whatsapp"
  href={`https://wa.me/523310626088?text=${encodeURIComponent(
    `Hola, me interesa cotizar el hotel ${trip.hotel} en ${trip.destination}, del ${trip.dates}. Vi el precio de $${trip.pricePerPerson.toLocaleString("es-MX")} MXN por persona en habitación doble. ¿Me pueden proporcionar más información?`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  💬 Solicitar cotización por WhatsApp
</a>

    </article>
  ))}
</div>

    </main>
  );
}

export default BeachTrips;