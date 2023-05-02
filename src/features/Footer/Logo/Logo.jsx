import React from 'react';
import classes from '../Footer.module.scss';
import logoPng from '../../../assets/img/logo.png';
import logoWebP from '../../../assets/img/logo.webp';

const Logo = () => (
    <a href="#mainScreen" className={classes.footer__logo} tabIndex="0">
        <picture>
            <source srcSet={logoPng} type="image/webp" />
            <img src={logoWebP} alt="logo" className={classes.footer__logo_img} />
        </picture>
    </a>
);

export default Logo;
