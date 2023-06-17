import React, { useState } from "react";
import "./NavBar.modules.css";
import CartWidget from "../CartWidget/CartWidget";
import {
  CCollapse,
  CContainer,
  CNavItem,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
} from "@coreui/react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@coreui/coreui";
export const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <>
        <CNavbar
          expand="lg"
          colorScheme="dark"
          className="bg-dark"
          placement="sticky-top"
        >
          <CContainer fluid style={{ position: "relative" }}>
            <CNavbarBrand href="/">
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
                  <Link href="/portfolio" active>
                    <Button>Portfolio</Button>
                  </Link>
                </CNavItem>
                <CNavItem>
                  <Link href="/bio" active>
                    <Button>Bio</Button>
                  </Link>
                </CNavItem>
                <CNavItem>
                  <Link href="/contact" active>
                    <Button>Contact me</Button>
                  </Link>
                </CNavItem>
              </CNavbarNav>
            </CCollapse>{" "}
            <CNavbarBrand className="widget" href="#">
              <CartWidget />
            </CNavbarBrand>
          </CContainer>
        </CNavbar>
      </>
      <Outlet />
    </>
  );
};

export default NavBar;
