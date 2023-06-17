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
import { Box, Button } from "@mui/material";

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
              <div>
                <Button
                  variant="contained"
                  size="small"
                  href="/portfolio"
                  sx={{ backgroundColor: "grey" }}
                >
                  Portfolio
                </Button>

                <Button
                  variant="contained"
                  size="small"
                  href="/bio"
                  sx={{ backgroundColor: "grey" }}
                >
                  Bio
                </Button>

                <Button
                  variant="contained"
                  size="small"
                  href="/contact"
                  sx={{ backgroundColor: "grey" }}
                >
                  Contact
                </Button>
              </div>
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
