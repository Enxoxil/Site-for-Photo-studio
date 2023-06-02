import React, { useState } from 'react';
import cn from 'classnames';
import { Trans, useTranslation } from 'react-i18next';
import classes from './Nav.module.scss';
import NavLink from './NavLink/NavLink';
import Button from '../../../ui/components/Button/Button';
import { useTheme } from '../../../hooks/useTheme';
import {
  DESIGN_STUDIO_TITLE_LINK, MAP_TITLE_LINK,
  OUR_WORKS_TITLE_LINK,
  PRICE_TITLE_LINK,
  SERVICE_TITLE_LINK
} from '../../../const/const';
import { resources } from '../../../i18n/i18n';

const initialValue = [
  {
    link: OUR_WORKS_TITLE_LINK,
    name: 'headerSection.nav.portfolio',
  }, {
    link: SERVICE_TITLE_LINK,
    name: 'headerSection.nav.jobs'
  }, {
    link: DESIGN_STUDIO_TITLE_LINK,
    name: 'headerSection.nav.about'
  }, {
    link: PRICE_TITLE_LINK,
    name: 'headerSection.nav.price'
  }, {
    link: MAP_TITLE_LINK,
    name: 'headerSection.nav.contacts'
  },
];

const Nav = ({
  isShowBurger,
  toggleBurger
}) => {
  const { t, i18n } = useTranslation();
  const [nav] = useState(initialValue);
  const { toggleThemeHandler } = useTheme();
  const btnThemeHandler = () => {
    toggleThemeHandler();
    toggleBurger();
  };
  const changeLanguage = (language) => {
    i18n.changeLanguage(language).then(() => {});
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
                        name={t(item.name)}
                        toggleBurger={toggleBurger}
                      />
                  ))}
                  <select
                    className={classes.menu__theme_btn_container}
                    onChange={(e) => (changeLanguage(e.target.value))}
                  >
                      {Object.keys(resources).map((lng) => (
                          <option
                            key={lng}
                            disabled={i18n.resolvedLanguage === lng}
                            className={classes.menu__theme_btn}
                            value={lng}
                          >
                              {lng}
                          </option>
                      ))}
                  </select>
                
                  <div className={classes.menu__theme_btn_container}>
                      <Button className={classes.menu__theme_btn} onClick={btnThemeHandler}>
                          <Trans i18nKey="headerSection.button.themeBtn" />
                      </Button>
                  </div>
              </ul>
          </nav>
      </div>
  );
};

export default Nav;
