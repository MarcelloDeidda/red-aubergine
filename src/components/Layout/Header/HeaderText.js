import classes from "./HeaderText.module.css";
import Card from "../../UI/Card";

const HeaderText = props => {
    return <Card className={classes["header-text"]}>
        <h2>Natural - Tasty - Convenient</h2>
        <p>
            Welcome to the Red Aubergine, an online vegetarian Italian-inspired restaurant! Our menu features a variety of vegetarian and vegan dishes, all made with fresh, locally-sourced ingredients. Healthy eating should never compromise on taste or convenience, which is why we offer easy online ordering and home delivery. Come explore the flavors of vegetarian Italian cuisine with us today!
        </p>
    </Card>
}

export default HeaderText;