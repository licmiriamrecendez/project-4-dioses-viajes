import "./BusServices.css";

function BusServices() {
  const message = encodeURIComponent(
    "Hola, me gustaría recibir información sobre los boletos de autobús que manejan en 4 Dioses Viajes."
  );

  return (
    <main className="bus">
      <h1 className="bus__title">
        Servicios de Camión 🚌
      </h1>

      <p className="bus__description">
        En 4 Dioses Viajes ofrecemos venta de boletos
        de autobús y renta de camiones para viajes,
        excursiones y grupos.
      </p>

      <section className="bus__lines">
        <h2>Líneas de autobuses que manejamos</h2>

        <img
          src="/autobuses/todos-los-autobuses.png"
          alt="Autobuses de Primera Plus, ETN, Futura, ODM, ADO, Vallarta Plus, Tepic Plus y Tufesa"
          className="bus__all-image"
        />

        <div className="bus__contact">
          <a
            href={`https://wa.me/523310626088?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bus__whatsapp"
          >
            Solicitar información por WhatsApp
          </a>
        </div>
      </section>

            <section className="bus__rental">
        <h2>Renta de Camiones o Sprinter🚌</h2>

        <div className="bus__rental-images">
  <img
    src="/autobuses/renta-transportes.png"
    alt="Autobús turístico, Sprinter y camioneta para renta"
    className="bus__rental-all-image"
  />
</div>

        <div className="bus__rental-details">
  <article className="bus__rental-card">
    <h3>🚌 Autobús turístico</h3>
    <p>Capacidad de 47 a 51 pasajeros.</p>
    <ul>
      <li>Una puerta de acceso</li>
      <li>Baño en la parte trasera</li>
      <li>3 pantallas y DVD</li>
      <li>Aire acondicionado y calefacción</li>
      <li>Sistema de sonido</li>
      <li>Asientos reclinables</li>
    </ul>
  </article>

  <article className="bus__rental-card">
    <h3>🚐 Camionetas y Sprinter</h3>
    <p>Capacidad de 8 a 20 pasajeros.</p>
    <ul>
      <li>Pantalla y DVD</li>
      <li>Aire acondicionado</li>
      <li>Sistema de sonido</li>
      <li>Asientos reclinables</li>
      <li>Compartimiento para equipaje</li>
    </ul>
  </article>

  <article className="bus__rental-card">
    <h3>✅ ¿Qué incluye la renta?</h3>
    <ul>
      <li>Chofer</li>
      <li>Combustible</li>
      <li>Traslado de acuerdo con la ruta contratada</li>
      <li>Viáticos del operador</li>
      <li>Seguro de pasajero dentro de la unidad</li>
    </ul>
    <p>
      <strong>Importante:</strong> No se incluyen movimientos
      adicionales en el destino, a menos que asi se solicite en la cotizacion.
    </p>
  </article>
</div>

        <p>
          ¿Estás organizando un viaje en grupo?
          En 4 Dioses Viajes te ayudamos a encontrar
          transporte para excursiones, viajes familiares,
          paseos escolares y eventos especiales.
        </p>

        <p>
          Solicita una cotización de acuerdo con tu
          destino, fecha de viaje y número de pasajeros.
        </p>

        <div className="bus__contact">
          <a
            href={`https://wa.me/523310626088?text=${encodeURIComponent(
              "Hola, me gustaría solicitar una cotización para renta de camión o sprinter."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bus__whatsapp"
          >
            Cotizar renta de camión o sprinter por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}


export default BusServices;