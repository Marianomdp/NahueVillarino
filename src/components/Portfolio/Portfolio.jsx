import { CNav, CNavItem, CNavLink } from "@coreui/react";
import React from "react";
import { useState } from "react";
import ItemListContainer from "../ItemList/ItemListContainer";
import "./Portfolio.css";

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState("bands");

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div style={{ minHeight: "82vh" }}>
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink
            onClick={() => handleSectionChange("bands")}
            active={currentSection === "bands"}
          >
            Bands
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => handleSectionChange("landscape")}
            active={currentSection === "landscape"}
          >
            Landscape
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => handleSectionChange("wildlife")}
            active={currentSection === "wildlife"}
          >
            Wildlife
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => handleSectionChange("texture")}
            active={currentSection === "texture"}
          >
            Texture
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => handleSectionChange("street")}
            active={currentSection === "street"}
          >
            Street
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => handleSectionChange("product")}
            active={currentSection === "product"}
          >
            Product
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            onClick={() => handleSectionChange("nightlife")}
            active={currentSection === "nightlife"}
          >
            Nightlife
          </CNavLink>
        </CNavItem>
      </CNav>

      <div>
        {currentSection === "bands" && (
          <div>
            <ItemListContainer category="bands" />
          </div>
        )}

        {currentSection === "landscape" && (
          <div>
            <ItemListContainer category="landscape" />
          </div>
        )}

        {currentSection === "wildlife" && (
          <div>
            <ItemListContainer category="wildlife" />
          </div>
        )}

        {currentSection === "texture" && (
          <div>
            <ItemListContainer category="texture" />
          </div>
        )}

        {currentSection === "street" && (
          <div>
            <ItemListContainer category="street" />
          </div>
        )}
        {currentSection === "product" && (
          <div>
            <ItemListContainer category="product" />
          </div>
        )}
        {currentSection === "nightlife" && (
          <div>
            <ItemListContainer category="nightlife" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
