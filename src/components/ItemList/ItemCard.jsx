import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${item.img})`,
        borderRadius: "4%",
        border: "1px solid rgb(236, 236, 196)",
        minWidth: "300px",
        minHeight: "300px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "10px",
        margin: "15px",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-around",
        cursor: "pointer",
        transform: hovered ? "scale(1.04)" : "scale(1)",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.6)",
          backgroundImage: `url(${item.img})`,
          borderRadius: "5%",
          padding: "5px",
          color: "#fff",
        }}
      >
        <h3>{item.title}</h3>
      </div>
      <Link to={`/ItemDetail/${item.id}`}>
        <Button
          size="small"
          style={{
            marginBottom: 1,
            fontWeight: "bold",
            fontSize: "15px",
            maxWidth: "20px",
            maxHeight: "30px",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "rgb(255, 255, 255)",
            padding: "6px 12px",
          }}
        >
          More
        </Button>
      </Link>
    </div>
  );
};

export default ItemCard;
