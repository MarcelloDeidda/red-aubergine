import { useContext, useEffect, useState } from "react";

import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../../store/cartContext";

const CartButton = props => {
    const [cartIsHighlighted, setCartIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfItems = items.reduce((currentValue, item) => {
        return currentValue + item.amount;
    }, 0);

    let cartButtonClasses = `${classes["cart-button"]} ${cartIsHighlighted && classes["cart-button-bounce"]}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setCartIsHighlighted(true);

        const bumpTimeout = setTimeout(() => {
            setCartIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(bumpTimeout);
        }

    }, [items]);

    return <button
        className={cartButtonClasses}
        onClick={props.onClick}
    >
        <CartIcon />
        <span className={classes["cart-button--text"]}>Your Cart</span>
        <span className={classes["cart-button--number"]}>({numberOfItems})</span>
    </button>
}

export default CartButton;