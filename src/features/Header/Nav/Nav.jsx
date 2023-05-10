import React, { useState } from 'react';
import cn from 'classnames';
import classes from './Nav.module.scss';
import NavLink from './NavLink/NavLink';
import Button from '../../../ui/components/Button/Button';
import { useTheme } from '../../../hooks/useTheme';

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

const Nav = ({
  isShowBurger,
  toggleBurger
}) => {
  const [nav] = useState(initialValue);
  const { toggleThemeHandler } = useTheme();
  const btnThemeHandler = () => {
    toggleThemeHandler();
    toggleBurger();
  };
  return (
      <div className={`${classes.menu} header__menu`}>

          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,
        jsx-a11y/click-events-have-key-events */}
          <nav className={cn(classes.menu__body, isShowBurger ? classes._active : '')} onClick={toggleBurger}>
              <ul className={classes.menu__list}>
                  {nav.map((item) => (
                      <NavLink
                        key={item.link}
                        link={item.link}
                        name={item.name}
                        toggleBurger={toggleBurger}
                      />
                  ))}
                  <div className={classes.menu__theme_btn_container}>
                      <Button className={classes.menu__theme_btn} onClick={btnThemeHandler}>Тема</Button>
                  </div>
              </ul>
          </nav>
      </div>
  );
};

export default Nav;
