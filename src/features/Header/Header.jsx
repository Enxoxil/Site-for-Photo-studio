import React from 'react';
import classes from './Header.module.scss';
import Button from "../../ui/components/Button/Button";
import Tel from "../../ui/components/Tel/Tel";
import Logo from "./Logo/HeaderLogo";
import Nav from "./Nav/Nav";

// import img
import PhonePng from '../../assets/img/phone.png';
import PhoneWebP from '../../assets/img/phone.webp';

const Header = props => {
    const {toggleBurger, isShowBurger} = props;
    return (<header className={classes.header}>
        <div className={classes.header__wrapper}>
            <div className={`${classes.header__container} _container`}>
                <div className={classes.header__body}>
                    <Logo/>
                    <div className={classes.header__main}>
                        <Nav isShowBurger={isShowBurger} toggleBurger={toggleBurger}/>
                    </div>
                    <div className={`${classes.actions_header}`}>
                        <div className={classes.actions_header__btn_container}>
                            <Button className={classes.actions_header__btn}>
                                Список звонков
                            </Button>
                        </div>
                        <Tel id='header__num' tel='+38 (093) 0930939' className={classes.actions_header__num}/>
                        <div className={classes.action_header__phone}>
                            <Tel tel="+38 (093) 0930939" id="header__num-img">
                                <picture>
                                    <source srcSet={PhoneWebP} type="image/webp"/>
                                    <img src={PhonePng} alt="Phone"/>
                                </picture>
                            </Tel>
                        </div>
                        <Button onClick={toggleBurger} className={`${classes.action_header__icon_menu} `}>
                            <span></span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </header>);
};

export default Header;