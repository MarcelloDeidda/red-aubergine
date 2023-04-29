import classes from "./Menu.module.css";
import Card from "../UI/Card";
import menuItems from "../../menu/menuItems";
import MenuSection from "./MenuSection";

const Menu = props => {
    const menuSections = [];

    for (let section in menuItems) {
        let title = `${section[0].toUpperCase()}${section.slice(1)}`
        menuSections.push(
            <MenuSection key={section} sectionTitle={title} meals={menuItems[section]}/>
        )
    }

    return <Card className={classes["menu"]}>
        <ul>
            {menuSections}
        </ul>
    </Card>
}

export default Menu;