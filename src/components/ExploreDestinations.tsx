
import { useEffect, useRef, useState } from "react";
import { getCountries, type Country } from "../utils/countriesApi";
import "./ExploreDestinations.css";

function ExploreDestinations() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const detailsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
  if (selectedCountry) {
    detailsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}, [selectedCountry]);

  useEffect(() => {
    async function loadCountries() {
      try {
        const data = await getCountries();

        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedCountries);
      } catch {
        setError(
          "Algo salió mal con la solicitud. Puede ser un problema de conexión o del servidor. Inténtalo de nuevo más tarde."
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
  country.name.common
    .toLowerCase()
    .includes(searchTerm.toLowerCase().trim())
);

  return (
    <main className="explore-destinations">
      <h1>🌎 Explora destinos</h1>
      <p>
        Descubre países del mundo y encuentra inspiración
        para tu próxima aventura con 4 Dioses Viajes.
      </p>

      <input
  type="search"
  placeholder="🔎 Busca un país, por ejemplo: México"
  aria-label="Buscar país"
  value={searchTerm}
  onChange={(event) => {
    setSearchTerm(event.target.value);
    setVisibleCount(12);
    setSelectedCountry(null);
  }}
  className="explore-destinations__search"
/>

      {isLoading && <p>Cargando destinos...</p>}

      {error && <p role="alert">{error}</p>}

      {!isLoading && !error && countries.length === 0 && (
        <p>No se encontró nada.</p>
      )}

      {!isLoading && !error && filteredCountries.length === 0 && countries.length > 0 && (
  <p>No se encontró ningún país con ese nombre.</p>
)}

      {!isLoading && !error && countries.length > 0 && (
        <div className="explore-destinations__grid">
          {filteredCountries.slice(0, visibleCount).map((country) => (
            <article
  className="explore-destinations__card"
  key={country.name.common}
  role="button"
  tabIndex={0}
  aria-label={`Ver detalles de ${country.name.common}`}
  onClick={() => setSelectedCountry(country)}
  onKeyDown={(event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedCountry(country);
    }
  }}
>
              <img
  src={country.flags.png}
  alt={country.flags.alt || `Bandera de ${country.name.common}`}
  loading="lazy"
  onError={(event) => {
    const image = event.currentTarget;
    const fallbackUrl = `https://flagcdn.com/w160/${country.iso2.toLowerCase()}.png`;

    if (image.src !== fallbackUrl) {
      image.src = fallbackUrl;
    }
  }}
/>
              <h2>{country.name.common}</h2>
              <p>
                <strong>Capital:</strong>{" "}
                {country.capital?.[0] || "No disponible"}
              </p>
              <p>
                <strong>Región:</strong> {country.region}
              </p>

              
<a
  href={`https://wa.me/523310626088?text=${encodeURIComponent(
    `Hola, me gustaría recibir información y una cotización para viajar a ${selectedCountry?.name.common ?? "este destino"} con 4 Dioses Viajes.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="explore-destinations__whatsapp"
>
  💬 Solicitar cotización por WhatsApp
</a>

            </article>
          ))}
        </div>
      )}

      {visibleCount < filteredCountries.length && (
  <button
    type="button"
    onClick={() => setVisibleCount((count) => count + 12)}
    className="explore-destinations__more"
  >
    
    Mostrar más países 🌎
  </button>
)}

      {selectedCountry && (
        <section
          ref={detailsRef}
          className="explore-destinations__details"
          aria-label="Detalles del país seleccionado"
        >
          <h2>Descubre {selectedCountry.name.common}</h2>

          <p>
            <strong>Capital:</strong>{" "}
            {selectedCountry.capital?.[0] || "No disponible"}
          </p>

          <p>
            <strong>Región:</strong> {selectedCountry.region}
          </p>

          <button
            type="button"
            onClick={() => setSelectedCountry(null)}
          >
            Cerrar detalles
          </button>
        </section>
      )}
    </main>
  );
}

export default ExploreDestinations;
