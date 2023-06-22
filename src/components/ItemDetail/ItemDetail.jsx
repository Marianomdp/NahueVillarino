import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import CounterContainer from "../Counter/CounterContainer";

const ItemDetail = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        padding: "30px",
        backgroundColor: "black",
        border: "1px solid #ccc",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img
            style={{
              maxWidth: "45vw",
              maxHeight: "45vh",
              border: "1px solid beige",
            }}
            src={product.img}
            alt="selected image product"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "20px",
              alignItems: "flex-start",
              backgroundColor: "rgb(236, 236, 196)",
              padding: "20px",
              borderRadius: "4px",
            }}
          >
            <Typography
              variant="h2"
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              {product.title}
            </Typography>
            <Typography variant="p" style={{}}>
              {product.description}
            </Typography>
            <br></br>
            <Typography variant="p" style={{}}>
              ${product.price}
            </Typography>
          </div>
        </Grid>
      </Grid>
      <CounterContainer
        stock={product.stock}
        onAdd={onAdd}
        initial={cantidadTotal}
        style={{}}
      />
      <div>
        <Link to="/">
          <Button variant="contained">Continue Buying</Button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
