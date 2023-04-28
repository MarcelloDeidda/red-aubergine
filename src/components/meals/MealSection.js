import classes from "./MealSection.module.css";
import Card from "../UI/Card";
import Meal from "./Meal";

const menuItems = [
    {
        id: "1",
        title: "Mushroom and Artichoke Risotto",
        description: "Creamy risotto topped with crushed almonds and squeezed lemon juice",
        price: 17
    },
    {
        id: "2",
        title: "Beetroot and Asparagus Risotto",
        description: "Creamy risotto topped with crushed almonds and squeezed lemon juice",
        price: 19
    },
    {
        id: "3",
        title: "Cima di Rapa Orecchiette",
        description: "Traditional recipe from Southern Italy with turnip tops and chilli peppers, in a cream of almond milk",
        price: 18
    }
];

const availableMealList = menuItems.map(item => {
    return <Meal
        id={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
    >
    </Meal>
});

const MealSection = props => {
    return <Card className={classes["meal-section"]}>
        <ul>
            {availableMealList}
        </ul>
    </Card>
}

export default MealSection;