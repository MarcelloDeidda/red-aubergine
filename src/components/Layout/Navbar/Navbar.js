import classes from "./Navbar.module.css";
import CartButton from "./CartButton";

const Navbar = props => {
    return <header className={classes.navbar}>
        <h1>Red Aubergine</h1>
        <CartButton onClick={props.onShowCart} />
    </header>
}

export default Navbar;