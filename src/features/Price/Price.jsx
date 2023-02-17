import React, {Component} from 'react';
import classes from './Price.module.scss'
import Card from "../../ui/components/Card/Card";




class Price extends Component {
    render() {
        return (<section className={classes.price}>
                <div className={classes.price__container}>
                    <h2 className={`${classes.price__title} _h2_title _scrollTo`} id="price__title">Стоимость
                        фотосессии</h2>
                    <div className={classes.price__box}>
                        <ul className={`${classes.price__items} ${classes.item_box}`}>
                            <div className={classes.item_box__container}>
                                <Card className={`${classes.item_box__wrapper} ${classes.theme_background_color_blue}`}>
                                    <div className={classes.item_box__header}>
                                        <p className={classes.item_box__name}>MINI</p>
                                        <p className={classes.item_box__cost}>
                                            <span data-cost="">2500</span>
                                            <span className={classes._cost_value}>₴</span>
                                        </p>
                                        <p className={classes.item_box__value}>/ 1 локация</p>
                                    </div>
                                    <ul className={classes.item_box__body}>
                                        <li
                                            className={`${classes.item_box__body_item} _icon_list_style_image`}
                                        >
                                            Длительность — 30 минут
                                        </li>
                                        <li
                                            className={`${classes.item_box__body_item} _icon_list_style_image`}
                                        >
                                            Исходники — До 100 штук
                                        </li>
                                        <li
                                            className={`${classes.item_box__body_item} _icon_list_style_image`}
                                        >
                                            Ретушь — 4 фото
                                        </li>
                                        <li
                                            className={`${classes.item_box__body_item} _icon_list_style_image`}
                                        >
                                            Аренда фотостудии — Бесплатно
                                        </li>
                                        <li
                                            className={`${classes.item_box__body_item} _icon_list_style_image`}
                                        >
                                            Любой образ
                                        </li>
                                    </ul>
                                    <div className={`${classes.item_box__footer} ${classes.box_footer}`}>
                                        <h5 className={classes.box_footer__title}>
                                            Дополнительные услуги
                                        </h5>
                                        <div className={classes.box_footer__box}>
                                            <div className={classes.box_footer__item}>
                                                <button className={classes.box_footer__button}>
                                                    Помощь
                                                    <br/>
                                                    в позировании
                                                </button>
                                            </div>
                                            <div className={classes.box_footer__item}>
                                                <button className={classes.box_footer__button}>
                                                    Визажист
                                                    <br/>
                                                    + 2000
                                                    <span className={classes._cost_value}>₴</span>
                                                </button>
                                            </div>
                                            <div className={classes.box_footer__item}>
                                                <button className={classes.box_footer__button}>
                                                    Дополнительная ретушь
                                                    <br/>
                                                    фото — 1 шт. / 250
                                                    <span className={classes._cost_value}>₴</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.item_box__button_container}>
                                        <button className={`${classes.item_box__button} _button`}>Забронировать</button>
                                    </div>
                                </Card>
                            </div>
                            <div className={classes.item_box__container}>
                                <Card className={`${classes.item_box__wrapper} ${classes.theme_background_color_light_pink}`}>
                                    <div className={classes.item_box__header}>
                                        <p className={classes.item_box__name}>STANDART</p>
                                        <p className={classes.item_box__cost}>
                                            <span data-cost="">5000</span>
                                            <span className={classes._cost_value}>₴</span>
                                        </p>
                                        <p className={classes.item_box__value}>/ 2 локации</p>
                                    </div>
                                    <ul className={classes.item_box__body}>
                                        <li className={`${classes.item_box__body_item} _icon_list_style_image`}>
                                            Длительность — 1 час 20 минут
                                        </li>
                                        <li className={`${classes.item_box__body_item} _icon_list_style_image`}>
                                            Исходники — До 200 штук
                                        </li>
                                        <li className={`${classes.item_box__body_item} _icon_list_style_image`}>
                                            Ретушь — 8 фото
                                        </li>
                                        <li className={`${classes.item_box__body_item} _icon_list_style_image`}>
                                            Аренда фотостудии — Бесплатно
                                        </li>
                                        <li className={`${classes.item_box__body_item} _icon_list_style_image`}>
                                            Любой образ
                                        </li>
                                    </ul>
                                    <div className={`${classes.item_box__footer} ${classes.box_footer}`}>
                                        <h5 className={classes.box_footer__title}>Дополнительные услуги</h5>
                                        <div className={classes.box_footer__box}>
                                            <div className={classes.box_footer__item}>
                                                <button className={classes.box_footer__button}>
                                                    Помощь
                                                    <br/>
                                                    в позировании
                                                </button>
                                            </div>
                                            <div className={classes.box_footer__item}>
                                                <button className={classes.box_footer__button}>
                                                    Визажист
                                                    <br/>
                                                    + 2000
                                                    <span className={classes._cost_value}>₴</span>
                                                </button>
                                            </div>
                                            <div className={classes.box_footer__item}>
                                                <button className={classes.box_footer__button}>
                                                    Дополнительная ретушь
                                                    <br/>
                                                    фото — 1 шт. / 250
                                                    <span className={classes._cost_value}>₴</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.item_box__button_container}>
                                        <button className={`${classes.item_box__button} _button`}>Забронировать</button>
                                    </div>
                                </Card>
                            </div>
                            <div className={classes.item_box__container}>
                                <Card className={`${classes.item_box__wrapper} ${classes.theme_background_color_pink}`}>
                                    <div className={classes.item_box__header}>
                                        <p className={classes.item_box__name}>MAXI</p>
                                        <p className={classes.item_box__cost}>
                                            <span data-cost="">N</span>
                                            <span className={classes._cost_value}>₴</span>
                                        </p>
                                        <p className={classes.item_box__value}>
                                            / Максимальное количество локаций
                                        </p>
                                    </div>
                                    <ul className={classes.item_box__body}>
                                        <li className={`${classes.item_box__body_item} _icon_list_style_image`}>
                                            Длительность — 4 часа
                                        </li>
                                        <li className={`${classes.item_box__body_item} _icon_list_style_image`}>
                                            Исходники — До 500 штук
                                        </li>
                                        <li className={`${classes.item_box__body_item} _icon_list_style_image`}>
                                            Ретушь — 50 фото
                                        </li>
                                        <li className={`${classes.item_box__body_item} _icon_list_style_image`}>
                                            Аренда фотостудии — Бесплатно
                                        </li>
                                        <li className={`${classes.item_box__body_item} _icon_list_style_image`}>
                                            Визажист — Make-Up, Укладка
                                        </li>
                                        <li className={`${classes.item_box__body_item} _icon_list_style_image`}>
                                            Предварительный подбор
                                            <br/>
                                            образов — До 8 образов
                                        </li>
                                    </ul>
                                    <div className={`${classes.item_box__footer} ${classes.box_footer}`}>
                                        <h5 className={classes.box_footer__title}>Дополнительные услуги</h5>
                                        <div className={classes.box_footer__box}>
                                            <div className={classes.box_footer__item}>
                                                <button className={classes.box_footer__button}>
                                                    Дополнительная ретушь
                                                    <br/>
                                                    фото — 1 шт. / 250
                                                    <span className={classes._cost_value}>₴</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.item_box__button_container}>
                                        <button className={`${classes.item_box__button} _button`}>Забронировать</button>
                                    </div>
                                </Card>
                            </div>
                        </ul>
                    </div>
                </div>
            </section>

        );
    }
}

export default Price;