import React, { useEffect, useState } from "react";
import "./NavBar.modules.css";
import CartWidget from "../CartWidget/CartWidget";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".NavBar-container");
      const scrollPosition = window.scrollY;
      const opacity = scrollPosition > 0 ? 0.9 : 1; // Opacidad deseada al hacer scroll

      navbar.style.opacity = opacity;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`NavBar-container ${
        isMobileMenuOpen ? "mobile-menu-open" : ""
      }`}
    >
      <img
        className={`logo ${isMobileMenuOpen ? "hide" : ""}`}
        src="https://res.cloudinary.com/dmqsnjyfq/image/upload/v1684876831/fotor_2023-5-23_18_15_32-modified_g9ntsk.png"
        alt="logo principal"
      />
      <div className={`secciones ${isMobileMenuOpen ? "show" : ""}`}>
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
      {window.innerWidth <= 768 && (
        <div className="menu-icon" onClick={toggleMobileMenu}>
          &#9776;
        </div>
      )}
    </nav>
  );
};

export default NavBar;
