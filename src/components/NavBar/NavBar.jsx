import React from "react";
import "./NavBar.modules.css";
import CartWidget from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <div className="NavBar-container">
      <img
        className="logo"
        src="https://res.cloudinary.com/dmqsnjyfq/image/upload/v1684185359/logo-removebg-preview_dout9y.png"
        alt="logo principal"
      />
      <div className="secciones">
        <ul>
          <li className="seccion">Especials</li>
          <li className="seccion">Nature</li>
          <li className="seccion">Twilight</li>
          <li className="seccion">Shadows</li>
          <li className="seccion">Contact</li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
