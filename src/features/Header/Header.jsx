import React from 'react';
import cn from 'classnames';
import { Trans, useTranslation } from 'react-i18next';
import classes from './Header.module.scss';
import Button from '../../ui/components/Button/Button';
import Tel from '../../ui/components/Tel/Tel';
import Logo from './Logo/HeaderLogo';
import Nav from './Nav/Nav';
// import img
import PhonePng from '../../assets/img/phone.png';
import PhoneWebP from '../../assets/img/phone.webp';
import { resources } from '../../i18n/i18n';

const Header = (props) => {
  const { toggleIsShowBurger, isShowBurger } = props;
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
      <header className={classes.header}>
          <div className={classes.header__wrapper}>
              <div className={`${classes.header__container} _container`}>
                  <div className={classes.header__body}>
                      <Logo />
                      <div className={classes.header__main}>
                          <Nav isShowBurger={isShowBurger} toggleBurger={toggleIsShowBurger} />
                      </div>
                      <div className={`${classes.actions_header}`}>
                          <div className={classes.actions_header__btn_container}>
                              <Button className={classes.actions_header__btn}>
                                  <Trans i18nKey="headerSection.button.nameBtn" />
                              </Button>
                          </div>
                          {Object.keys(resources).map((lng) => (
                              <button
                                key={lng}
                                onClick={() => (changeLanguage(lng))}
                                disabled={i18n.resolvedLanguage === lng}
                              >
                                  {lng}
                              </button>
                          ))}
                          <Tel id="header__num" tel="+38 (093) 0930939" className={classes.actions_header__num} />
                          <div className={classes.action_header__phone}>
                              <Tel tel="+38 (093) 0930939" id="header__num-img">
                                  <picture>
                                      <source srcSet={PhoneWebP} type="image/webp" />
                                      <img src={PhonePng} alt="Phone" />
                                  </picture>
                              </Tel>
                          </div>
                          <Button
                            onClick={toggleIsShowBurger}
                            className={cn(classes.action_header__icon_menu, (isShowBurger) ? classes._active : null)}
                          >
                              <span />
                          </Button>
                      </div>
                  </div>
              </div>
          </div>
      </header>
  );
};

export default Header;
