import classes from "./HeaderImage.module.css";
import headerImg from "../../../assets/header-img.jpg"

const HeaderImage = props => {
    return <img className={classes["header-img"]} src={headerImg} alt="A colourful spread of vegetarian food"></img>
}

export default HeaderImage;