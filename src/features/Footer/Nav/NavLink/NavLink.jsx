import React, {Component} from 'react';
import classes from "./NavLink.module.scss";

class NavLink extends Component {

    render() {
        const {link, name} = this.props;
        return (
            <li className={classes.footer_nav__item}>
                <a href={link} className={classes.footer_nav__link}>{name}</a>
            </li>
        );
    }
}

export default NavLink;