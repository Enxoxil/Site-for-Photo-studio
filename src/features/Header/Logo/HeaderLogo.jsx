import React, {Component} from 'react';
import classes from './HeaderLogo.module.scss'
import logoPng from '../../../assets/img/logo.png'
import logoWebP from '../../../assets/img/logo.webp'

class HeaderLogo extends Component {
    render() {
        return (
            <a href="#mainScreen" tabIndex="0">
                <picture>
                    <source srcSet={logoWebP} type="image/webp"/>
                    <img src={logoPng} alt="logo" className={classes.header__logo}/>
                </picture>
            </a>
        );
    }
}

export default HeaderLogo;