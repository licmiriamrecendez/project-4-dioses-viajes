import "./AboutAuthor.css";

function AboutAuthor() {
  return (
    <main className="about-author">
      <h1>Sobre la autora</h1>

      <img
  className="about-author__photo"
  src="/team/MIRIAM RECENDEZ.jpg"
  alt="Miriam, creadora del sitio web de 4 Dioses Viajes"
  width="220"
  loading="lazy"
/>

      <h2>Desarrollo web de 4 Dioses Viajes</h2>

      <p>
        Soy Miriam, estudiante de desarrollo web en TripleTen
        y creadora de este sitio web para 4 Dioses Viajes.
      </p>

      <p>
        Este proyecto combina mi aprendizaje en programación
        con mi interés por ofrecer una experiencia digital
        práctica y accesible para quienes desean viajar.
      </p>

      <p>
        Para desarrollarlo he utilizado React, TypeScript,
        HTML, CSS y herramientas para consultar información
        de países mediante una API.
      </p>

      <a href="/" className="about-author__back">
  ← Volver a 4 Dioses Viajes
</a>
    </main>
  );
}

export default AboutAuthor;
