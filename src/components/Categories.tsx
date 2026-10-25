
import { Link } from "react-router-dom";
import {
  Users,
  Mountain,
  Waves,
  Globe,
  Landmark,
  Tags,
  Bus,
  Plane,
  UsersRound,
  MapPinned,
} from "lucide-react";

import "./Categories.css";

const categories = [
  { name: "¿Quiénes somos?", icon: Users, path: "/nosotros" },
  { name: "Excursiones", icon: Mountain, path: "/excursiones" },
  { name: "Salidas a la playa", icon: Waves, path: "/salidas-a-la-playa" },
  {
    name: "Paquetes Internacionales",
    icon: Globe,
    path: "/paquetes-internacionales",
  },
  {
    name: "Promociones del mes",
    icon: Tags,
    path: "/promociones-del-mes",
  },
  {
    name: "Explora destinos",
    icon: MapPinned,
    path: "/explora-destinos",
  },
  { name: "Camión", icon: Bus, path: "/camion" },
  { name: "Vuelos", icon: Plane, path: "/vuelos" },
  { name: "Grupos", icon: UsersRound, path: "/grupos" },
  { name: "Datos Bancarios", icon: Landmark, path: "/datos-bancarios" },
];

function Categories() {
  return (
    <section className="categories">
      <h2 className="categories__title">
        Explora nuestros servicios
      </h2>

      <div className="categories__grid">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <Link
              to={category.path}
              className="categories__card"
              key={category.name}
            >
              <Icon size={20} aria-hidden="true" />
              <h3>{category.name}</h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;
