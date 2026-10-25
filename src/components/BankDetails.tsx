
import {
  Banknote,
  ArrowLeftRight,
  Landmark,
  Link as LinkIcon,
} from "lucide-react";

import "./BankDetails.css";

function BankDetails() {
  return (
    <main className="bank">
      <h1 className="bank__title">
        Datos Bancarios y Formas de Pago
      </h1>

      <p className="bank__description">
        Elige la forma de pago que prefieras
        para reservar tu próximo viaje.
      </p>

      <section className="bank__methods">
        {/* COLUMNA IZQUIERDA */}
        <div className="bank__column">
          {/* PAGO EN EFECTIVO */}
          <article className="bank__method">
            <Banknote size={32} />

            <h2>Pago en efectivo</h2>

            <p>¡Visita nuestra sucursal!</p>

            <p>
              📍 Anesagasti #174, Col. Tonalá Centro,
              C.P. 45400, Tonalá, Jalisco.
            </p>

            <h3>🕒 Horario de atención</h3>

            <p>
              <strong>Lunes a viernes:</strong>
              <br />
              10:00 a.m. a 3:00 p.m.
              <br />
              5:00 p.m. a 7:00 p.m.
            </p>

            <p>
              <strong>Sábados:</strong>
              <br />
              10:00 a.m. a 2:00 p.m.
            </p>

            <p>
              <strong>Domingos:</strong> Cerrado
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Anesagasti+174+Tonal%C3%A1+Centro+45400+Tonal%C3%A1+Jalisco"
              target="_blank"
              rel="noopener noreferrer"
              className="bank__whatsapp"
            >
              📍 Ver ubicación en Google Maps
            </a>

            <div className="bank__map">
              <iframe
                title="Ubicación de 4 Dioses Viajes"
                src="https://www.google.com/maps?q=Anesagasti%20174%2C%20Tonal%C3%A1%20Centro%2C%20Tonal%C3%A1%2C%20Jalisco&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </article>

          {/* LINK DE PAGO */}
          <article className="bank__method">
            <LinkIcon size={32} />

            <h2>Link de pago</h2>

            <p>
              Solicita tu enlace de pago
              personalizado por WhatsApp.
            </p>

            <a
              href="https://wa.me/523310626088?text=Hola%2C%20quiero%20solicitar%20un%20link%20de%20pago%20para%20mi%20reservaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="bank__whatsapp"
            >
              Solicitar link de pago
            </a>
          </article>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="bank__column">
          {/* TRANSFERENCIA BANCARIA */}
          <article className="bank__method">
            <ArrowLeftRight size={32} />

            <h2>Transferencia bancaria</h2>

            <p>
              Realiza tu transferencia a nuestra cuenta BBVA.
            </p>

            <p>
              <strong>Banco:</strong> BBVA
            </p>

            <p>
              <strong>Beneficiario:</strong>
              <br />
              Miriam Isabel Recendez Cervantes
            </p>

            <p>
              <strong>CLABE interbancaria:</strong>
              <br />
              012320004760093018
            </p>

            <button
              type="button"
              className="bank__whatsapp"
              onClick={() => {
                navigator.clipboard.writeText(
                  "012320004760093018"
                );
              }}
            >
              📋 Copiar CLABE
            </button>

            <p>
              <strong>Concepto de pago:</strong>
              <br />
              Nombre del titular de la reservación.
            </p>
          </article>

          {/* DEPÓSITO BANCARIO */}
          <article className="bank__method">
            <Landmark size={32} />

            <h2>Depósito bancario</h2>

            <p>
              Realiza tu depósito a nuestra cuenta BBVA.
            </p>

            <p>
              <strong>Banco:</strong> BBVA
            </p>

            <p>
              <strong>Beneficiario:</strong>
              <br />
              Miriam Isabel Recendez Cervantes
            </p>

            <p>
              <strong>Número de cuenta:</strong>
              <br />
              0476009301
            </p>

            <button
              type="button"
              className="bank__whatsapp"
              onClick={() => {
                navigator.clipboard.writeText("0476009301");
              }}
            >
              📋 Copiar número de cuenta
            </button>

            <p>
              <strong>Número de tarjeta:</strong>
              <br />
              4152 3146 6635 6335
            </p>

            <button
              type="button"
              className="bank__whatsapp"
              onClick={() => {
                navigator.clipboard.writeText(
                  "4152314666356335"
                );
              }}
            >
              📋 Copiar número de tarjeta
            </button>

            <p>
              <strong>Concepto de pago:</strong>
              <br />
              Nombre del titular de la reservación.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default BankDetails;
