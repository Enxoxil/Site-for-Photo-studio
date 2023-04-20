import React, {Component} from 'react';
import classes from './MainPopup.module.scss';

import modalFeedback from '../../../assets/img/modal-feedback.webp';
import Form from "../../../ui/components/Form/Form";
import Input from "../../../ui/components/Input/Input";
import Button from "../../../ui/components/Button/Button";

class MainPopup extends Component {
    render() {
        const {toggleShowPopup, formHandler} = this.props;
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
                                <Form formHandler={formHandler} action="#" className={`${classes.form__body} _form _formFeedback`}>
                                    <div className={classes.form__wrapper}>
                                        <h3 className={classes.form__title}>Форма обратной связи</h3>
                                        <ul className={classes.form__box}>
                                            <li className={classes.form__item}>
                                                <Input id="feedback-name" type="text" placeholder="Введите ваше имя"
                                                       name="name" required autoFocus label='Имя'/>
                                            </li>
                                            <li className={classes.form__item}>
                                                <Input id="feedback-email" type="email" placeholder="Введите ваш E-mail"
                                                       name="email" required label='E-mail'/>
                                            </li>
                                            <li className={classes.form__item}>
                                                <Input id="feedback-phone" type="tel" placeholder="Введите ваше Телефон"
                                                       name="tel" required label='Телефон' minLength="10"
                                                       maxLength="10"/>
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
                                            <a href="#" className={classes.form__text_policy}>политикой
                                                конфиденциальности</a>
                                        </p>
                                    </div>
                                </Form>

                            </div>
                            <button className={`${classes.feedback__btn} _closeModalBtn`} type="button" tabIndex="0"
                                    onClick={toggleShowPopup}>
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