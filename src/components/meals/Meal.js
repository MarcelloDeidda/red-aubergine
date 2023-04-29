import classes from "./Meal.module.css";
import MealForm from "./MealForm";

const Meal = props => {
    return <li key={props.id} id={props.id} className={classes.meal}>
        <div className={classes["meal-info"]}>
            <h4 className={classes.title}>{props.title}<span className={classes.price}>{`£${props.price.toFixed(2)}`}</span></h4>
            <p className={classes.description}>{props.description}</p>
        </div>
        <MealForm />
    </li>
}

export default Meal;
