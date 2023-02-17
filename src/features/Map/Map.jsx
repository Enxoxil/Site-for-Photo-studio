import React, {Component} from 'react';
import classes from './Map.module.scss'
import Image from "../../ui/components/Image/Image";


//Import image
import logo from '../../assets/img/logo-white.png';
import Button from "../../ui/components/Button/Button";
import Form from "./Form/Form";
import Input from "../../ui/components/Input/Input";

class Map extends Component {
    render() {
        return (<section className={`${classes.map} _scrollTo`}>
                <div className={`${classes.map__container} _container`} id="map__wrapper">
                    <div className={classes.map__wrapper}>
                        <div className={classes.map__body}>
                            <div className={`${classes.map__item} item`}>
                                <div className={`${classes.item__box} theme_background_color_black`}>
                                    <div className={classes.item__box_logo}>
                                        <Image src={logo} alt="logo" className={classes.item__box_img}/>
                                    </div>
                                    <a
                                        href="tel:+380930930939"
                                        className={classes.item__box_num}
                                        id="map__num"
                                    >
                                        +38 (093) 0930939
                                    </a>
                                    <a
                                        href="mailto:content@addmarkets.ru"
                                        className={classes.item__box_link}
                                    >
                                        content@addmarkets.ru
                                    </a>
                                    <p className={classes.item__box_text}>
                                        <span>Режим работы:</span>
                                        <br/>
                                        ПН-ПТ 09:00 - 18:00
                                    </p>
                                </div>
                            </div>
                            <div className={`${classes.map__form} form theme_background_color_blue`}>
                                <Form action="#" className={`${classes.form__body} _form`}>
                                    <div className={classes.form__wrapper}>
                                        <h3 className={classes.form__title}>Форма обратной связи</h3>
                                        <ul className={classes.form__box}>
                                            <li className={classes.form__item}>
                                                <Input id="map-name"
                                                       type="text"
                                                       placeholder="Введите ваше имя"
                                                       name="name"
                                                       required
                                                       label='Имя'
                                                />
                                            </li>
                                            <li className={classes.form__item}>
                                                <Input id="map-email"
                                                       type="email"
                                                       placeholder="Введите ваш E-mail"
                                                       name="email"
                                                       required
                                                       label='E-mail'
                                                />
                                            </li>
                                            <li className={classes.form__item}>
                                                <Input id="map-phone"
                                                       type="tel"
                                                       placeholder="Введите ваше Телефон"
                                                       name="phone"
                                                       required
                                                       label='Телефон'
                                                />
                                            </li>
                                            <li className={classes.form__button_container}>
                                                <Button className={`${classes.form__button} _button`} type="submit">
                                                    Отправить
                                                </Button>
                                            </li>
                                        </ul>
                                        <p className={classes.form__text}>
                                            Нажимая кнопку «Отправить», вы даете согласие на
                                            обработку персональных данных и соглашаетесь с
                                            <a href="#" className={classes.form__text_polici}>политикой
                                                конфиденциальности</a>
                                        </p>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Map;