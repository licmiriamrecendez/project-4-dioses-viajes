import "./About.css";

const team = [
  {
    role: "Gerente de reservaciones",
    email: "reservas@4diosesviajes.com",
    image: "/team/MIRIAM RECENDEZ.jpg",
  },
  {
    role: "Agente de viajes",
    email: "agente4diosesviajes@gmail.com",
    image: "/team/GABY HERNANDEZ.jpg",
  },
  {
    role: "Agente de viajes",
    email: "4diosesv@gmail.com",
    image: "/team/SANDY MONTALVO.jpg",
  },
];

const values = [
  {
    title: "Confianza",
    description: "Brindamos información clara y atención honesta.",
  },
  {
    title: "Compromiso",
    description: "Acompañamos a nuestros viajeros en cada etapa.",
  },
  {
    title: "Responsabilidad",
    description: "Cuidamos cada detalle de nuestros servicios.",
  },
  {
    title: "Calidez",
    description: "Atendemos con amabilidad y cercanía.",
  },
  {
    title: "Pasión",
    description: "Amamos crear experiencias y descubrir destinos.",
  },
  {
    title: "Trabajo en equipo",
    description: "Colaboramos para ofrecer un mejor servicio.",
  },
];

function About() {
  return (
    <main className="about">

      <div className="about__decorations" aria-hidden="true">
  <img
    src="/tonala/entrada-tonala.png"
    alt=""
    className="about__decoration about__decoration--entrance"
  />

  <img
    src="/tonala/reina-cihualpilli.png"
    alt=""
    className="about__decoration about__decoration--queen"
  />

</div>
      <h1 className="about__title">¿Quiénes somos?</h1>

      <section className="about__section">
        <h2>Nuestra misión</h2>
        <p>
          Crear experiencias de viaje inolvidables, ofreciendo atención
          cercana, asesoría personalizada y opciones que se adapten a los
          sueños y necesidades de cada viajero. En 4 Dioses Viajes trabajamos
          para que cada aventura comience con confianza, ilusión y tranquilidad.
        </p>
      </section>

      <section className="about__section">
        <h2>Nuestra visión</h2>
        <p>
          Ser una agencia de viajes reconocida por su calidad humana,
          confianza y compromiso, convirtiéndonos en la primera opción de
          quienes desean descubrir México y el mundo, creando recuerdos
          que perduren toda la vida.
        </p>
      </section>

      <section className="about__section">
        <h2>Nuestros valores</h2>
        <div className="about__values">
  {values.map((value) => (
    <article className="about__value" key={value.title}>
      <h3>{value.title}</h3>
      <p>{value.description}</p>
    </article>
  ))}
</div>
      </section>

      <div className="about__tastuanes">
  <img
    src="/tonala/tastuanes.png"
    alt="Danzantes tradicionales tastuanes de Tonalá, Jalisco"
    loading="lazy"
  />
</div>

      <section className="about__section about__rnt">
  <h2>🏅 Registro Nacional de Turismo en la República Mexicana</h2>

  <p>
    En 4 Dioses Viajes trabajamos con compromiso,
    transparencia y confianza para brindar una
    atención profesional a nuestros viajeros.
  </p>

    <div className="about__rnt-number">
    <h3>RNT: 4141010046</h3>

    <button
      type="button"
      className="about__rnt-copy"
      onClick={() => {
        navigator.clipboard.writeText("4141010046");
        alert("Número de RNT copiado: 4141010046");
      }}
    >
      📋 Copiar
    </button>
  </div>

  <a
  href="https://rnt-consulta.sectur.gob.mx/"
  target="_blank"
  rel="noopener noreferrer"
  className="about__rnt-link"
>
   Consultar Registro Nacional de Turismo en SECTUR ↗
</a>

</section>

<section className="about__section about__history">
  <h2>Nuestra historia</h2>

  <p>
    <strong>4 Dioses Viajes nació en junio de 2018</strong>,
    fundada por la Licenciada en Turismo{" "}
    <strong>Miriam Isabel Recendez Cervantes</strong>.
  </p>

  <p>
    La inspiración para crear esta agencia surgió al descubrir
    la belleza, la riqueza histórica y el gran patrimonio cultural
    del centro de <strong>Tonalá, Jalisco</strong>, un lugar lleno
    de tradiciones, arte e identidad mexicana, de ahi el nombre de la agencia, los 4 guardianes de Tonalá, que representan los 4 elementos de la naturaleza: tierra, agua, fuego y aire, asi como los 4 puntos cardinales, es por eso que de guardianes se reconocen como 4 DIOSES.
  </p>

  <p>
    Fue precisamente ese encanto el que motivó a su fundadora
    a establecer la agencia en el corazón de Tonalá, con el
    propósito de compartir su pasión por el turismo y acercar
    a más personas a experiencias de viaje inolvidables.
  </p>

  <p>
    Desde entonces, en <strong>4 Dioses Viajes</strong> trabajamos
    con dedicación, atención personalizada y amor por los viajes,
    ayudando a nuestros clientes a descubrir nuevos destinos,
    culturas y experiencias dentro y fuera de México.
  </p>

  <div className="about__gods">
  <img
    src="/tonala/cuatro-dioses.png"
    alt="Los cuatro guardianes de Tonalá, inspiración de 4 Dioses Viajes"
    loading="lazy"
  />
</div>
</section>

      <section className="about__section">
        <h2>Conoce a nuestro equipo</h2>
        <div className="about__balls">
  <img
    src="/tonala/pelotas-tonala.png"
    alt="Pelotas artesanales de Tonalá, Jalisco"
    loading="lazy"
  />
</div>
        <div className="about__team">
  {team.slice(0, 1).map((member) => (
    <article className="about__member" key={member.email}>
      <a
  href="/sobre-la-autora"
  aria-label="Conoce a Miriam, creadora del sitio web"
  title="Conoce a la desarrolladora"
>
  <img
    src={member.image}
    alt={`Fotografía del equipo: ${member.role}`}
    width="240"
    loading="lazy"
  />
</a>
<p>{member.role}</p>
      <a href={`mailto:${member.email}`}>
        {member.email}
      </a>
    </article>
  ))}
</div>

<div className="about__team about__team-agents">
  {team.slice(1).map((member) => (
    <article className="about__member" key={member.email}>
      <img
        src={member.image}
        alt={`Fotografía del equipo: ${member.role}`}
        width="240"
        loading="lazy"
      />

      <p>{member.role}</p>

      <a href={`mailto:${member.email}`}>
        {member.email}
      </a>
    </article>
  ))}
</div>
      </section>
    </main>
  );
}

export default About;