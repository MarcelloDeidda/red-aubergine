import { useContext } from "react";

import classes from "./Meal.module.css";
import MealForm from "./MealForm";
import CartContext from "../../store/cartContext";

const Meal = props => {
    const cartCtx = useContext(CartContext);

    const price = `£${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            title: props.title,
            amount: amount,
            price: props.price
        })
    };

    return <li key={props.id} id={props.id} className={classes.meal}>
        <div className={classes["meal-info"]}>
            <h4 className={classes.title}>{props.title}<span className={classes.price}>{price}</span></h4>
            <p className={classes.description}>{props.description}</p>
        </div>
        <MealForm onAddToCart={addToCartHandler}/>
    </li>
}

export default Meal;
