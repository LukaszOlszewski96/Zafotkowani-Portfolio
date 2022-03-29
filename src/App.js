import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import './styles/App/App.css';
import { About } from "./pages/About";
import { SocialBox } from "./components/SocialBox/SocialBox";
import { Portfolio } from "./pages/Portfolio";
import { Offer } from "./pages/Offer";
import { Opinion } from "./pages/Opinion";
import { Footer } from "./components/Footer/Footer";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element={
          <>
            <Home/>
            <SocialBox/>
            <About/>
            <Portfolio/>
            <Offer/>
            <Opinion/>
            <Footer/>
          </>
        }/>
        <Route path='/kontakt' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
