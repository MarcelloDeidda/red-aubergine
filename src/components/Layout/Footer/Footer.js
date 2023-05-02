import classes from "./Footer.module.css";

const Footer = () => {
    return <div>
        <p className={classes.footer}>
            This dummy Order Page was developed by <a href="https://marcellodeidda.github.io/" target="_blank">
                Marcello Deidda
            </a>
            , using React.js. Credit for the pictures go to <a href="https://unsplash.com/@victoriakosmo" target="_blank">
                Victoria Shes
            </a>.
        </p>
    </div>
}

export default Footer;