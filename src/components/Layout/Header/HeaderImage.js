import classes from "./HeaderImage.module.css";

const HeaderImage = props => {
    return <img className={classes["header-img"]} src="./assets/header-img.jpg" alt="A colourful spread of vegetarian food"></img>
}

export default HeaderImage;