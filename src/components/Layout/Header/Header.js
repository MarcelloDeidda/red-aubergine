import classes from "./Header.module.css"
import HeaderImage from "./HeaderImage";
import HeaderText from "./HeaderText";

const Header = props => {
    return <div className={classes.header}>
        <HeaderImage></HeaderImage>
        <HeaderText></HeaderText>
    </div>
}

export default Header;