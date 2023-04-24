import React from 'react';
import classes from "./NavLink.module.scss";

const NavLink = ({link, name, toggleBurger}) => {
    return (
        <li className={classes.menu__item}>
            <a href={link} onClick={toggleBurger} className={classes.menu__link}>{name}</a>
        </li>
    );
};
export default NavLink;

