import Meal from "./Meal";
import classes from "./MenuSection.module.css";

const MenuSection = props => {
    const availableMealList = props.meals.map(item => {
        return <Meal
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
        >
        </Meal>
    });

    return <li className={classes["menu-section"]}>
        <h3 className={classes["section-title"]}>
            {props.sectionTitle}
        </h3>
        <ul>
            {availableMealList}
        </ul>
    </li>
}

export default MenuSection;