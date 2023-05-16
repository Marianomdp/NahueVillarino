import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <ShoppingCartTwoToneIcon />
      <span className="cart-widget-count">0</span>
    </div>
  );
};

export default CartWidget;
