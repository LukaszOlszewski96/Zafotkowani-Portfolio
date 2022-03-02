import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import './styles/App/App.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <div className='social__box'>
          <a href="#"><FaInstagram/></a>
          <a href="#"><FaFacebookF/></a>
        </div>
      <Routes>
        <Route path = '/' element={<><Home/><About/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
