import { Button } from "@mui/material";

const CounterPresentation = ({ sumar, restar, counter, onAdd }) => {
  return (
    <>
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Button variant="contained" onClick={restar}>
          Remove
        </Button>
        <h2>{counter}</h2>
        <Button variant="contained" onClick={sumar}>
          Add
        </Button>
        <Button variant="contained" onClick={() => onAdd(counter)}>
          Add to Cart
        </Button>
      </div>
    </>
  );
};

export default CounterPresentation;
