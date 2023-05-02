import React, { useState } from 'react';
import classes from './Nav.module.scss';
import NavLink from './NavLink/NavLink';

const initialValue = [
  {
    link: '#ourWorks__title', name: 'Портфолио'
  }, {
    link: '#service__title', name: 'Виды работ'
  }, {
    link: '#designStudio__title', name: 'О фотостудии'
  }, {
    link: '#price__title', name: 'Услуги и цены'
  }, {
    link: '#review__title', name: 'Отзывы'
  }, {
    link: '#map__wrapper', name: 'Контакты'
  },
];

const Nav = () => {
  const [navItems] = useState(initialValue);
  return (
      <nav className={classes.footer_nav}>
          <ul className={classes.footer_nav__body}>
              {navItems.map((item) => <NavLink key={item.link} link={item.link} name={item.name} />)}
          </ul>
      </nav>
  );
};

export default Nav;
