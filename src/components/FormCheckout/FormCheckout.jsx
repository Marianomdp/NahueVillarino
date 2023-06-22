import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const FormCheckout = ({ handleSubmit, handleChange, errors, values }) => {
  return (
    <div style={{ paddingTop: "50px", background: "#C7C5C5" }}>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              name="phone"
              onChange={handleChange}
              error={errors.phone ? true : false}
              helperText={errors.phone}
            />
          </Grid>

          <Grid item xs={6}>
            <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
              Finish
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;
