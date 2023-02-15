import React, {Component} from 'react';
import classes from './Header.module.scss';
import Logo from "./Logo/HeaderLogo";
import Nav from "./Nav/Nav";
import Button from "../../ui/components/Button/Button";
import Tel from "../../ui/components/Tel/Tel";

class Header extends Component {
    render() {
        return (
            <header className={classes.header}>
                <div className={classes.header__wrapper}>
                    <div className={`${classes.header__container} _container`}>
                        <div className={classes.header__body}>
                            <Logo/>
                            <div className={classes.header__main}>
                                <Nav/>
                            </div>
                            <div className={`${classes.actions_header}`}>

                                <div className={classes.actions_header__btn_container}>
                                    <Button classNames={classes.actions_header__btn} name='ОБРАТНЫЙ ЗВОНОК'/>
                                </div>
                                <Tel id='header__num' tel='+38 (093) 0930939' classNames={classes.actions_header__num} />

                                <div className={classes.action_header__phone}>
                                    <a href="tel:+380930930939" id="header__num-img">
                                        <picture>
                                            <source srcSet="/img/phone.webp" type="image/webp"/>
                                            <img src="/img/phone.png" alt="Phone"/>
                                        </picture>
                                    </a>
                                </div>
                                <button className={classes.action_header__icon_menu} type="button">
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;