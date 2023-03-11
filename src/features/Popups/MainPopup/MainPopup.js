import React, {Component} from 'react';
import classes from './MainPopup.module.scss';

import modalFeedback from '../../../assets/img/modal-feedback.webp';

class MainPopup extends Component {
    render() {
        const {toggleShowPopup} = this.props;
        return (
            <section className={`${classes.feedback} _modal`}>
                <div className={classes.feedback__container}>
                    <div className={`${classes.feedback__wrapper} _modalNoCloseField`}>
                        <div className={classes.feedback__body}>
                            <div className={classes.feedback__img_container}>
                                <img src={modalFeedback} alt="background modal feedback"
                                     className={classes.feedback__img}/>
                            </div>
                            <div className={`${classes.feedback__form} ${classes.form}`}>
                                <form action="#" className={`${classes.form__body} _form _formFeedback`}>
                                    <div className={classes.form__wrapper}>
                                        <h3 className={classes.form__title}>Форма обратной связи</h3>
                                        <ul className={classes.form__box}>
                                            <li className={classes.form__item}>
                                                <label htmlFor="feedback-name">
                                                    Имя
                                                </label>
                                                <input
                                                    id="feedback-name"
                                                    type="text"
                                                    placeholder="Введите ваше имя"
                                                    name="name"
                                                    required
                                                    autoFocus
                                                />
                                            </li>
                                            <li className={classes.form__item}>
                                                <label htmlFor="feedback-email">
                                                    E-mail
                                                </label>
                                                <input
                                                    id="feedback-email"
                                                    type="email"
                                                    placeholder="Введите ваш E-mail"
                                                    name="email"
                                                    required
                                                />
                                            </li>
                                            <li className={classes.form__item}>
                                                <label htmlFor="feedback-phone">
                                                    Телефон
                                                </label>
                                                <input
                                                    id="feedback-phone"
                                                    type="tel"
                                                    placeholder="Введите ваше Телефон"
                                                    minLength="10"
                                                    maxLength="10"
                                                    name="phone"
                                                    required
                                                />
                                            </li>
                                            <li className={classes.form__button_container}>
                                                <button className={`${classes.form__button} _button`} type="submit">
                                                    Отправить
                                                </button>
                                            </li>
                                        </ul>
                                        <p className={classes.form__text}>
                                            Нажимая кнопку «Отправить», вы даете согласие на
                                            обработку персональных данных и соглашаетесь с
                                            <a href="#" className={classes.form__text_policy}>политикой конфиденциальности</a>
                                        </p>
                                    </div>
                                </form>

                            </div>
                            <button className={`${classes.feedback__btn} _closeModalBtn`} type="button" tabIndex="0" onClick={toggleShowPopup}>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MainPopup;