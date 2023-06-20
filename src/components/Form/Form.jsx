import React, { useState } from "react";
import styles from "./Form.module.css";
import { Typography } from "@mui/material";

const Form = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    emailConfirm: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const envioDeFormulario = (evento) => {
    evento.preventDefault();
    // LOGIN

    console.log(userData);
  };

  const cancelarFormulario = () => {
    setUserData({
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      emailConfirm: "",
    });
  };

  return (
    <div className={styles.formulario} style={{ minHeight: "82vh" }}>
      <Typography variant="h3">CONTACT</Typography>

      <form onSubmit={envioDeFormulario}>
        <div>
          <label htmlFor="nombre">Name:</label>
          <input
            type="text"
            id="nombre"
            placeholder="Name here"
            name="nombre"
            value={userData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            placeholder="Ingresa tu apellido"
            name="apellido"
            value={userData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="telefono">Phone:</label>
          <input
            type="tel"
            id="telefono"
            placeholder="phone number"
            name="telefono"
            value={userData.telefono}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">E mail:</label>
          <input
            type="email"
            id="email"
            placeholder="email here"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="emailConfirm">confirm email:</label>
          <input
            type="email"
            id="emailConfirm"
            placeholder="Confirm your email"
            name="emailConfirm"
            value={userData.emailConfirm}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          disabled={
            !userData.nombre ||
            !userData.apellido ||
            !userData.email ||
            !userData.emailConfirm
          }
        >
          Submit
        </button>
        <button type="button" onClick={cancelarFormulario}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Form;
