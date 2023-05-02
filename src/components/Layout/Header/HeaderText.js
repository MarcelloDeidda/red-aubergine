import classes from "./HeaderText.module.css";
import Card from "../../UI/Card";

const HeaderText = props => {
    return <Card className={classes["header-text"]}>
        <h2 className={classes["header-text--title"]}>Natural - Tasty - Convenient</h2>
        <p>
            Welcome to the Red Aubergine, an online plant-based Italian restaurant! Our menu features a variety of delicious vegan dishes, delivered to you in just a click!
        </p>
    </Card>
}

export default HeaderText;