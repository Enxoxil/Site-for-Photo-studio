import React, {Component} from 'react';
import classes from "./Nav.module.scss";
import NavLink from "./NavLink/Navlink";

const initial_value = {
    nav: [
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
            link: '#map__wrapper',
            name: 'Контакты'
        },
    ]
}

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = initial_value;
    }

    render() {
        return (
            <div className={`${classes.menu} header__menu`}>
                <nav className={classes.menu__body}>
                    <ul className={classes.menu__list}>
                        {this.state.nav.map(item => <NavLink key={item.link} link={item.link} name={item.name}/>)}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;