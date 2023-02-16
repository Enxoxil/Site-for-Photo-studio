import React, {Component} from 'react';
import classes from './MainScreen.module.scss';
import Button from "../../ui/components/Button/Button";

class MainScreen extends Component {
    render() {
        return (
            <section className={`${classes.main_screen} _scrollTo`} id="mainScreen">
                <div className={classes.main_screen__inner}>
                    <video autoPlay muted loop className={classes.main_screen__video} id="main-screen__video">
                        <source src="/video/bg_video.mp4" type="video/mp4"/>
                    </video>
                    <div className={`${classes.main_screen__container} _container`}>
                        <div className={`${classes.main_screen__wrapper} ${classes.main_content}`}>
                            <h2 className={classes.main_content__title}>
                                <span>Профессиональная</span> фотосессия в студии
                            </h2>
                            <p className={classes.main_content__sub_title}>
                                Наша фотостудия позволит исполнить ваши мечты
                            </p>
                            <p className={classes.main_content__text}>
                                Фотографии стали неотъемлемой частью нашей жизни.<br/> Это теперь
                                не просто памятные снимки в альбомах, ныне фото становиться
                                способом понравиться окружающим, получить восхищение,
                                заявить о себе всему миру. <br/>
                                Выбор правильной фотостудии занимает далеко не последнее место в получение
                                фотографий. И
                                мы с точностью заявляем, что нашей фотостудией вы останетесь
                                довольны и еще не раз захотите возвращаться к нам.
                            </p>
                            <Button className={`${classes.main_content__button}`}>
                                Получить консультацию
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MainScreen;