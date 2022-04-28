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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <SocialBox />
              <About />
              <Portfolio />
              <Offer />
              <Opinion />
              <Footer />
            </>
          }
        />
        <Route
          path="/kontakt"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <>
              <Navbar />
              <PortfolioALL />
              <Footer />
            </>
          }
        />
        <Route
          path="/opinie"
          element={
            <>
              <Navbar />
              <OpinionAll />
              <Footer />
            </>
          }
        />
        <Route
          path="/strefa-klienta"
          element={
            <>
              <Navbar />
              <ClientZone />
              <Footer />
            </>
          }
        />
        <Route
          path="/strefa-klienta/galeria"
          element={
            <>
              <Navbar />
              <DetailsGallery />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
