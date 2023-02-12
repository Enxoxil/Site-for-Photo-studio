import React, {Component} from 'react';
import classes from "./Footer.module.scss";
import FooterLogo from "./Logo/FooterLogo";

class Footer extends Component {
    render() {
        return (
            <footer className={classes.footer}>
                <div className={`${classes.footer__container} _container`}>
                    <div className={classes.footer__wrapper}>
                        <div className={classes.footer__main}>
                            <FooterLogo/>
                            <nav className={`${classes.footer__menu} ${classes.footer_menu}`}>
                                <ul className={classes.footer_menu__body}>
                                    <li className={classes.footer_menu__item}>
                                        <a href="#ourWorks__title" className={classes.footer_menu__link}>Портфолио</a>
                                    </li>
                                    <li className={classes.footer_menu__item}>
                                        <a href="#service__title" className={classes.footer_menu__link}>Виды работ</a>
                                    </li>
                                    <li className={classes.footer_menu__item}>
                                        <a href="#designStudio__title" className={classes.footer_menu__link}>
                                            О фотостудии
                                        </a>
                                    </li>
                                    <li className={classes.footer_menu__item}>
                                        <a href="#price__title" className={classes.footer_menu__link}>
                                            Услуги и цены
                                        </a>
                                    </li>
                                    <li className={classes.footer_menu__item}>
                                        <a href="#review__title" className={classes.footer_menu__link}>Отзывы</a>
                                    </li>
                                    <li className={classes.footer_menu__item}>
                                        <a href="#map__wrapper" className={classes.footer_menu__link}>Контакты</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className={classes.sub}>
                            <div className={classes.sub__wrapper}>
                                <div className={classes.sub__text}>
                                    <p className={classes.sub__text_content}>Наши социальные сети:</p>
                                </div>
                                <a href="#" className={`sub__inst _icon_insta ${classes._sub_icon}`}></a>
                                <a href="#" className={`sub__facebook _icon_facebook ${classes._sub_icon}`}></a>
                                <a href="#" className={`sub__twitter _icon_twitter ${classes._sub_icon}`}></a>
                                <a href="#" className={`sub__telegramm _icon_telegram ${classes._sub_icon}`}></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;