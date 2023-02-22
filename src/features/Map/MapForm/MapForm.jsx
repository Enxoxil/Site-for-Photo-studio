import React, {Component} from 'react';
import classes from "./MapForm.module.scss";
import Input from "../../../ui/components/Input/Input";
import Button from "../../../ui/components/Button/Button";


class MapForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Entered values: ', this.state);
        this.setState(state => ({
            ...state,
            name: '',
            email: '',
            phone: ''
        }));
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState(state => ({
            ...state,
            [name]: value,
        }));
    }

    render() {
        const {name, email, phone} = this.state;
        return (
            <div className={`${classes.map__form} ${classes.form} theme_background_color_blue`}>
                <form onSubmit={this.handleSubmit} className={`${classes.form__body} _form`}>
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
                                       value={name}
                                       onChangeHandler={this.handleInputChange}
                                />
                            </li>
                            <li className={classes.form__item}>
                                <Input id="map-email"
                                       type="email"
                                       placeholder="Введите ваш E-mail"
                                       name="email"
                                       required
                                       label='E-mail'
                                       value={email}
                                       onChangeHandler={this.handleInputChange}
                                />
                            </li>
                            <li className={classes.form__item}>
                                <Input id="map-phone"
                                       type="tel"
                                       placeholder="Введите ваше Телефон"
                                       name="phone"
                                       required
                                       label='Телефон'
                                       value={phone}
                                       onChangeHandler={this.handleInputChange}
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
                </form>
            </div>
        );
    }
}

export default MapForm;