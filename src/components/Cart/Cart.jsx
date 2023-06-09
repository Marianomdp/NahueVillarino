import { Button } from "@mui/material";
import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  clearCartWithAlert,
  deleteProductById,
  total,
  totalProducts,
  plusProductById,
  navigate,
}) => {
  return (
    <div style={{ minHeight: "80vh" }}>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
                <div className="cart-item-info">
                  <h3>${item.price * item.quantity}.-</h3>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Button
                    style={{
                      fontSize: "12px",
                      margin: "auto", // Reducir el tamaño de la fuente
                      padding: "4px 4px", // Ajustar el padding
                      borderRadius: "4px", // Aplicar bordes redondeados
                      color: "#102e44", // Cambiar el color del texto
                    }}
                    onClick={() => deleteProductById(item.id)}
                  >
                    -
                  </Button>
                  <h3 style={{ margin: "0 8px" }}>{item.quantity}</h3>
                  <Button
                    style={{
                      fontSize: "15px",
                      margin: "auto", // Reducir el tamaño de la fuente
                      padding: "2px 2px", // Ajustar el padding
                      borderRadius: "4px", // Aplicar bordes redondeados
                      color: "#102e44", // Cambiar el color del texto
                    }}
                    onClick={() => plusProductById(item.id)}
                  >
                    +
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h2>Cart description:</h2>
          <h3>Photos: {totalProducts()}</h3>
          <h3>Total: $ {total}</h3>
          {cart.length > 0 ? (
            <div className="btn-cart">
              {" "}
              <Button onClick={clearCartWithAlert} variant="contained">
                Empty Cart
              </Button>
              <Button variant="contained" onClick={() => navigate("/checkout")}>
                Finish
              </Button>
            </div>
          ) : (
            <Link to="/portfolio">
              <Button variant="contained">Portfolio</Button>
            </Link>
          )}

          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "20px",
              color: "black",
              textTransform: "uppercase",
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            TOTAL ${total}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
