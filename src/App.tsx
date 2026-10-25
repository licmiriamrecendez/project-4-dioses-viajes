import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./pages/About";
import Excursions from "./components/Excursions";
import InternationalPackages from "./components/InternationalPackages";
import EuropePackages from "./components/EuropePackages";
import AsiaPackages from "./components/AsiaPackages";
import AmericaPackages from "./components/AmericaPackages";
import BeachTrips from "./components/BeachTrips";
import BankDetails from "./components/BankDetails";
import MonthlyPromotions from "./components/MonthlyPromotions";
import BusServices from "./components/BusServices";
import Flights from "./components/Flights";
import Groups from "./components/Groups";
import ExploreDestinations from "./components/ExploreDestinations";
import AboutAuthor from "./pages/AboutAuthor";
import "./App.css";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/excursiones" element={<Excursions />} />
        <Route path="/paquetes-internacionales" element={<InternationalPackages />} />
        <Route path="/paquetes-internacionales/europa" element={<EuropePackages />} />
        <Route path="/paquetes-internacionales/asia" element={<AsiaPackages />} />
        <Route path="/paquetes-internacionales/america" element={<AmericaPackages />} />
        <Route path="/salidas-a-la-playa" element={<BeachTrips />} />
        <Route path="/datos-bancarios" element={<BankDetails />} />
        <Route path="/promociones-del-mes" element={<MonthlyPromotions />} />
        <Route path="/camion" element={<BusServices />} />
        <Route path="/vuelos" element={<Flights />} />
        <Route path="/grupos" element={<Groups />} />
        <Route path="/explora-destinos" element={<ExploreDestinations />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/sobre-la-autora" element={<AboutAuthor />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;