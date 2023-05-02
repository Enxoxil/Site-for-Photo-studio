import React, { useState } from 'react';
import cn from 'classnames';
import classes from './Nav.module.scss';
import NavLink from './NavLink/NavLink';

const initialValue = [
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
];

const Nav = ({ isShowBurger, toggleBurger }) => {
  const [nav] = useState(initialValue);

  return (
      <div className={`${classes.menu} header__menu`}>
          <nav className={cn(classes.menu__body, isShowBurger ? classes._active : '')}>
              <ul className={classes.menu__list}>
                  {nav.map((item) => (
                      <NavLink
                        key={item.link}
                        link={item.link}
                        name={item.name}
                        toggleBurger={toggleBurger}
                      />
                  ))}
              </ul>
          </nav>
      </div>
  );
};

export default Nav;
