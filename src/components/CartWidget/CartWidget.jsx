import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <div className="container-cart">
      <Link to="/cart">
        <ShoppingCartTwoToneIcon sx={{ color: "rgb(236, 236, 196)" }} />
        <div className="bubble-counter">
          <span>{total}</span>
        </div>
      </Link>
    </div>
  );
};

export default CartWidget;
