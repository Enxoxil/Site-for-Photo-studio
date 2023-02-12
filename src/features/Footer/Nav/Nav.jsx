import React, {Component} from 'react';
import classes from "./Nav.module.scss";
import NavLink from "./NavLink/NavLink";

class Nav extends Component {

    navEntities = [
        {
            link: '#ourWorks__title',
            name: 'Портфолио'
        },
        {
            link: '#service__title',
            name: 'Виды работ'
        },
        {
            link: '#designStudio__title',
            name: 'О фотостудии'
        },
        {
            link: '#price__title',
            name: 'Услуги и цены'
        },
        {
            link: '#review__title',
            name: 'Отзывы'
        },
        {
            link: '#map__wrapper',
            name: 'Контакты'
        },

    ]


    render() {
        return (
            <nav className={classes.footer_nav}>
                <ul className={classes.footer_nav__body}>
                    {this.navEntities.map(item => <NavLink key={item.link} link={item.link} name={item.name}/>)}
                </ul>
            </nav>
        );
    }
}

export default Nav;