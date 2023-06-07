import { CNav, CNavItem, CNavLink } from "@coreui/react";
import React from "react";
import { useState } from "react";
import ItemListContainer from "../ItemList/ItemListContainer";

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState("bands");

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
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
            onClick={() => handleSectionChange("landscapes")}
            active={currentSection === "landscapes"}
          >
            Landscapes
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
      </CNav>

      <div>
        {currentSection === "bands" && (
          <div>
            <h2>Bands Section</h2>
            <ItemListContainer category="bands" />
          </div>
        )}

        {currentSection === "landscapes" && (
          <div>
            <h2>Landscapes Section</h2>
            <ItemListContainer category="landscapes" />
          </div>
        )}

        {currentSection === "wildlife" && (
          <div>
            <h2>Wildlife Section</h2>
            <ItemListContainer category="wildlife" />
          </div>
        )}

        {currentSection === "texture" && (
          <div>
            <h2>Texture Section</h2>
            <ItemListContainer category="texture" />
          </div>
        )}

        {currentSection === "street" && (
          <div>
            <h2>Street Section</h2>
            <ItemListContainer category="street" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
