import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";

const CartButton = props => {
    return <button className={classes["cart-button"]}>
        <CartIcon />
        <span className={classes["cart-button--text"]}>Your Cart</span>
        <span>(0)</span>
    </button>
}

export default CartButton;