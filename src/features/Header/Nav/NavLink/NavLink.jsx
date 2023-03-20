import React, {Component} from 'react';
import classes from "./NavLink.module.scss";

class NavLink extends Component {

    render() {
        const {link, name, toggleBurger} = this.props;
        return (
            <>
                <li className={classes.menu__item}>
                    <a href={link} onClick={toggleBurger} className={classes.menu__link}>{name}</a>
                </li>
            </>
        );
    }
}

export default NavLink;

