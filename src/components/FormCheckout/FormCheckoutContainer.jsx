import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";

import { useFormik } from "formik";

import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { db } from "../../FirebaseConfig";

import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Box, Grid } from "@mui/material";

export const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((product) =>
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );

    clearCart();
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      phone: null,
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("This field is required")
        .min(3, "three characters are required")
        .max(10, "the name must not exceed ten characters"),
      email: Yup.string()
        .email("must contain an email")
        .required("This field is required"),
      phone: Yup.number().required("This field is required"),
    }),
    validateOnChange: false,
  });

  return (
    <div className="checkout-container" style={{ minHeight: "80vh" }}>
      {orderId ? (
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Box
              textAlign="center"
              p={4}
              border={1}
              borderRadius={4}
              borderColor="primary.main"
              component="h2"
              variant="h1"
            >
              "Thank you for your purchase, I will contact you as soon as
              possible"
            </Box>
          </Grid>
        </Grid>
      ) : (
        <FormCheckout
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
        />
      )}
    </div>
  );
};
