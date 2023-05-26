import React from 'react';
import { Trans } from 'react-i18next';
import classes from './Gifts.module.scss';
import giftImg from '../../assets/img/section-gift.png';

const Gifts = () => (
    <section className={classes.gifts}>
        <div className={classes.gifts__wrapper}>
            <h2 className={`${classes.gifts__title} _h2_title`}>
                <Trans i18nKey="giftsSection.sectionTitle" />
            </h2>
            <div className={classes.gifts__container}>
                <div className={classes.gifts__body}>
                    <div className={classes.gifts__text}>
                        <div className={classes.gifts__text_name}>
                            <Trans i18nKey="giftsSection.card.cardPreTitle" />
                        </div>
                        <p className={classes.gifts__text_paragraph}>
                            <Trans i18nKey="giftsSection.card.cardTitle" />
                        </p>
                        <ul className="gifts__text_list list_body">
                            <li
                              className={`${classes.list_body__item} _icon_list_style_image_check`}
                            >
                                <Trans i18nKey="giftsSection.card.cardList.listItem_1" />
                            </li>
                            <li
                              className={`${classes.list_body__item} _icon_list_style_image_check`}
                            >
                                <Trans i18nKey="giftsSection.card.cardList.listItem_2" />
                            </li>
                            <li
                              className={`${classes.list_body__item} _icon_list_style_image_check`}
                            >
                                <Trans i18nKey="giftsSection.card.cardList.listItem_3" />
                            </li>
                        </ul>
                    </div>
                    <div className={classes.gifts__item}>
                        <div className={classes.gifts__item_img_container}>
                            <img src={giftImg} alt="" className={classes.gifts__item_img} />
                        </div>
                        <p className={classes.gifts__item_paragraph}>
                            <Trans i18nKey="giftsSection.card.cardText" />
                        </p>
                        <div className="gifts__item_button_container">
                            <button
                              className={`${classes.gifts__item_button} _button _openModalButton`}
                              data-modal-class-name="feedback"
                            >
                                <Trans i18nKey="giftsSection.card.cardBtnName" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

);

export default Gifts;
