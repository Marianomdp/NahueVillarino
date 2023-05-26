import Carousel from "./components/Carousel/Carousel";
import { Footer } from "./components/Footer/Footer";
import MainGrid from "./components/MainGrid/MainGrid";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <MainGrid />
      <Footer />
    </div>
  );
}

export default App;
