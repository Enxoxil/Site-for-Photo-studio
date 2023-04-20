import React from 'react';
import classes from "./NavLink.module.scss";

const NavLink = props => {
    const {link, name} = props;
    return (
        <li className={classes.footer_nav__item}>
            <a href={link} className={classes.footer_nav__link}>{name}</a>
        </li>
    );
};

export default NavLink;