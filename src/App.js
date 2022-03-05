import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import './styles/App/App.css';
import { About } from "./pages/About";
import { SocialBox } from "./components/SocialBox/SocialBox";
import { Portfolio } from "./pages/Portfolio";

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
        </>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
