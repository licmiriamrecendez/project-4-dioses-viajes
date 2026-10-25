import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <main className="main">

    

      <section className="main__video-section">
  <video
    className="main__video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source
      src="/videos/playa-mexicana.mp4"
      type="video/mp4"
    />
    Tu navegador no admite videos.
  </video>

  <div className="main__video-content">
   <h2 className="main__video-title">
  <Link
    to="/promociones-del-mes"
    className="main__video-link"
  >
    Tu próxima aventura comienza aquí
  </Link>
</h2>

    <p className="main__video-description">
      Descubre destinos increíbles con 4 Dioses Viajes
    </p>
  </div>
</section>
    </main>
  );
}

export default Main;