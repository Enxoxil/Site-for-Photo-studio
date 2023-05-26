import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Nav.module.scss';
import NavLink from './NavLink/NavLink';
import {
  OUR_WORKS_TITLE_LINK,
  SERVICE_TITLE_LINK,
  DESIGN_STUDIO_TITLE_LINK,
  PRICE_TITLE_LINK,
  MAP_TITLE_LINK,
  REVIEW_TITLE_LINK
} from '../../../const/const';

const initialValue = [
  {
    link: OUR_WORKS_TITLE_LINK,
    name: 'headerSection.nav.portfolio',
  }, {
    link: SERVICE_TITLE_LINK,
    name: 'headerSection.nav.jobs',
  }, {
    link: DESIGN_STUDIO_TITLE_LINK,
    name: 'headerSection.nav.about',
  }, {
    link: PRICE_TITLE_LINK,
    name: 'headerSection.nav.price',
  }, {
    link: REVIEW_TITLE_LINK,
    name: 'headerSection.nav.review',
  }, {
    link: MAP_TITLE_LINK,
    name: 'headerSection.nav.contacts',
  },
];

const Nav = () => {
  const [navItems] = useState(initialValue);
  const { t } = useTranslation();

  return (
      <nav className={classes.footer_nav}>
          <ul className={classes.footer_nav__body}>
              {navItems.map((item) => <NavLink key={item.link} link={item.link} name={t(item.name)} />)}
          </ul>
      </nav>
  );
};

export default Nav;
