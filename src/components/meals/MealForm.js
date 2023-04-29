import classes from "./MealForm.module.css";

const MealForm = props => {
    return <form className={classes["meal-form"]}>
        <input type="number"></input>
        <button type="submit">Add</button>
    </form>
}

export default MealForm;