import React, { useState } from "react";
import "./NavBar.modules.css";
import CartWidget from "../CartWidget/CartWidget";
import {
  CCollapse,
  CContainer,
  CNavItem,
  CNavLink,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
} from "@coreui/react";
export const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CNavbar
        expand="lg"
        colorScheme="dark"
        className="bg-dark"
        placement="sticky-top"
      >
        <CContainer fluid>
          <CNavbarBrand href="#">
            <img
              src="https://res.cloudinary.com/dmqsnjyfq/image/upload/v1684876680/fotor_2023-5-23_18_15_32_gyinj9.png"
              alt="logo principal"
              width="80"
              height="70"
            />
          </CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="#" active>
                  PORTFOLIO
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#" active>
                  BIO
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#" active>
                  CONTACT
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>{" "}
          <CNavbarBrand className="widget" href="#">
            <CartWidget />
          </CNavbarBrand>
        </CContainer>
      </CNavbar>
    </>
  );
};

export default NavBar;
