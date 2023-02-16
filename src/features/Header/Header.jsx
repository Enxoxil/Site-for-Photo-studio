import React, {Component} from 'react';
import classes from './Header.module.scss';
import Button from "../../ui/components/Button/Button";
import Tel from "../../ui/components/Tel/Tel";
import Logo from "./Logo/HeaderLogo";
import Nav from "./Nav/Nav";

// import img
import PhonePng from '../../assets/img/phone.png';
import PhoneWebP from '../../assets/img/phone.webp';

class Header extends Component {
    render() {
        return (<header className={classes.header}>
                <div className={classes.header__wrapper}>
                    <div className={`${classes.header__container} _container`}>
                        <div className={classes.header__body}>
                            <Logo/>
                            <div className={classes.header__main}>
                                <Nav/>
                            </div>
                            <div className={`${classes.actions_header}`}>
                                <div className={classes.actions_header__btn_container}>
                                    <Button className={classes.actions_header__btn}>
                                        ОБРАТНЫЙ ЗВОНОК
                                    </Button>
                                </div>
                                <Tel id='header__num' tel='+380930930939' className={classes.actions_header__num}/>
                                <div className={classes.action_header__phone}>
                                    <Tel tel="tel:+380930930939" id="header__num-img">
                                        <picture>
                                            <source srcSet={PhoneWebP} type="image/webp"/>
                                            <img src={PhonePng} alt="Phone"/>
                                        </picture>
                                    </Tel>
                                </div>
                                <Button className={classes.action_header__icon_menu}>
                                    <span></span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>);
    }
}

export default Header;