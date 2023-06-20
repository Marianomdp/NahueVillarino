import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${item.img})`,
        borderRadius: "4%",
        border: "solid",
        borderWidth: "1px",
        minWidth: "300px",
        minHeight: "300px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "10px",
        margin: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-around",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        transition: "box-shadow 0.3s ease 2s",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "(0, 0, 0, 0.2) 9px 13px 10px 4px",
        },
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          berder: "solid",
          borderRadius: "5%",
          padding: "5px",
          color: "#fff",
        }}
      >
        <h3>{item.title}</h3>
      </div>
      <Link
        to={`/ItemDetail/${item.id}`}
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          berder: "solid",
          borderRadius: "5%",
          color: "#fff",
        }}
      >
        <Button variant="contained" size="small" style={{ marginBottom: 1 }}>
          More
        </Button>
      </Link>
    </div>
  );
};
export default ItemCard;
