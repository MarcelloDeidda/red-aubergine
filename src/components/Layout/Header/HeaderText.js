import classes from "./HeaderText.module.css";
import Card from "../../UI/Card";

const HeaderText = props => {
    return <Card className={classes["header-text"]}>
        <h2>Natural - Tasty - Convenient</h2>
        <p>
            Welcome to the Red Aubergine, an online vegetarian Italian-inspired restaurant! Our menu features a variety of vegetarian and vegan dishes, delivered to you in just a click!
        </p>
    </Card>
}

export default HeaderText;