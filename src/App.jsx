import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import { Form } from "./components/Form/Form";
import Bio from "./components/Bio/Bio";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/contact" element={<Form />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
