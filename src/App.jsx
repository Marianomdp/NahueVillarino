import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Form from "./components/Form/Form";
import Bio from "./components/Bio/Bio";
import CartContextProvider from "./context/CartContext";
import CartContainer from "./components/Cart/CartContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";

import { FormCheckoutContainer } from "./components/FormCheckout/FormCheckoutContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />

          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/contact" element={<Form />} />
          <Route path="/checkout" element={<FormCheckoutContainer />} />
          <Route path="*" element={"Error, la ruta no existe"} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
