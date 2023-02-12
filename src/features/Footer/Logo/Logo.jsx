import React, {Component} from 'react';
import classes from "../Footer.module.scss";

class Logo extends Component {
    render() {
        return (
            <a href="#mainScreen" className={classes.footer__logo} tabIndex="0">
                <picture>
                    <source srcSet="img/footer-logo.webp" type="image/webp"/>
                    <img src="img/footer-logo.png" alt="logo" className={classes.footer__logo_img}/>
                </picture>
            </a>
        );
    }
}

export default Logo;