import React from 'react';
import classes from "./MapForm.module.scss";
import Input from "../../../ui/components/Input/Input";
import Button from "../../../ui/components/Button/Button";
import Form from "../../../ui/components/Form/Form";
import {api} from "../../../DAL/Api/api";



const MapForm = () => {
    const formHandler = (data) => {
        api.saveUser(data);
        console.log('Thank you! Your data was send to Firebase :', data)
    }

    return (
        <div className={`map__form ${classes.form} theme_background_color_blue`}>
            <Form formHandler={formHandler} className={`${classes.form__body} _form`}>
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
                                   name="tel"
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
                        <a href="#" className={classes.form__text_policy}>политикой
                            конфиденциальности</a>
                    </p>
                </div>
            </Form>
        </div>
    );
}

export default MapForm;