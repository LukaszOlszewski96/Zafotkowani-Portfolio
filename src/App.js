import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import "./styles/App/App.css";
import { About } from "./pages/About";
import { SocialBox } from "./components/SocialBox/SocialBox";
import { Portfolio } from "./pages/Portfolio";
import { Offer } from "./pages/Offer";
import { Opinion } from "./pages/Opinion";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./pages/Contact";
import { PortfolioALL } from "./pages/Portfolio-all";
import { OpinionAll } from "./pages/Opinion-all";
import { ClientZone } from "./pages/Client-zone";
import { DetailsGallery } from "./pages/Details-gallery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <SocialBox />
              <About />
              <Portfolio />
              <Offer />
              <Opinion />
            </>
          }
        />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/portfolio" element={<PortfolioALL />} />
        <Route path="/opinie" element={<OpinionAll />} />
        <Route path="/strefa-klienta" element={<ClientZone />} />
        <Route path="/strefa-klienta/galeria" element={<DetailsGallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
