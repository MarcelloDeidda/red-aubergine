import { useState } from "react";

import classes from "./MealForm.module.css";

const MealForm = props => {
    const [enteredAmount, setEnteredAmount] = useState(0);

    const changeHandler = e => {
        setEnteredAmount(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();

        if (enteredAmount < 1 || enteredAmount > 5) {
            return;
        }

        props.onAddToCart(enteredAmount);
        setEnteredAmount(0);
    }

    return <form onSubmit={submitHandler} className={classes["meal-form"]}>
        <input onChange={changeHandler} type="number" required min="1" max="5" value={enteredAmount} />
        <button type="submit">Add</button>
    </form>
}

export default MealForm;