import React, {Component} from 'react';
import classes from "./Gifts.module.scss";

class Gifts extends Component {
    render() {
        return (
            <section className={classes.gifts}>
                <div className={classes.gifts__wrapper}>
                    <h2 className={`${classes.gifts__title} _h2_title`}>
                        Подарочный сертификат<br/> на фотосессию
                    </h2>
                    <div className={classes.gifts__container}>
                        <div className={classes.gifts__body}>
                            <div className={classes.gifts__text}>
                                <div className={classes.gifts__text_name}>СЕРТИФИКАТ НА ФОТОСЕССИЮ</div>
                                <p className={classes.gifts__text_paragraph}>
                                    Это подарок, который западает в душу
                                </p>
                                <ul className={`${classes.gifts__text_list} list_body`}>
                                    <li
                                        className={`${classes.list_body__item} _icon_list_style_image_check`}
                                    >
                                        Креативное оформление
                                    </li>
                                    <li
                                        className={`${classes.list_body__item} _icon_list_style_image_check`}
                                    >
                                        Открытый календарь
                                    </li>
                                    <li
                                        className={`${classes.list_body__item} _icon_list_style_image_check`}
                                    >
                                        Всё включено
                                    </li>
                                </ul>
                            </div>
                            <div className={classes.gifts__item}>
                                <div className={classes.gifts__item_img_container}>
                                    <img src="img/section-gift.png" alt="" className={classes.gifts__item_img}/>
                                </div>
                                <p className={classes.gifts__item_paragraph}>
                                    Срок действия сертификата: 2 месяца
                                    <br/>
                                    со дня приобретения.
                                </p>
                                <div className="gifts__item_button_container">
                                    <button className={`${classes.gifts__item_button} _button _openModalButton`}
                                            data-modal-class-name="feedback">
                                        Приобрести
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Gifts;