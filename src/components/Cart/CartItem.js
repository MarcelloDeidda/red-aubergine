import classes from "./CartItem.module.css";

const CartItem = props => {
    return <li className={classes["cart-item"]}>
        <div className={classes["cart-item--info"]}>
            <span className={classes.title}>{props.item.title}</span>
            <span className={classes.price}>{props.price}</span>
        </div>
        <div className={classes.actions}>
            <button className={`${classes.remove} ${classes.button}`} onClick={props.onRemove}>-</button>
            <p className={classes.amount}>{props.item.amount}</p>
            <button className={`${classes.add} ${classes.button}`} onClick={props.onAdd}>+</button>
        </div>
    </li>
}

export default CartItem;