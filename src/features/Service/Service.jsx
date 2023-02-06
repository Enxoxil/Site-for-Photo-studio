import React, {Component} from 'react';
import classes from "./Service.module.scss";

class Service extends Component {
    render() {
        return (
            <section className={classes.service}>
                <div className={classes.service__container}>
                    <div className={classes.service__wrapper}>
                        <h2 className={`${classes.service__title} _h2_title _scrollTo`} id="service__title">Виды
                            услуг</h2>
                        <ul className={classes.service__content_box}>

                            <li className={classes.service__content_item}>
                                <img src="img/service-img1.png" alt="Фотосессия Лав Стори"
                                     className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Фотосессия Лав Стори
                                </p>
                            </li>
                            <li className={classes.service__content_item}>
                                <img src="img/service-img2.png" alt="Фотосессия для подростков"
                                     className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Фотосессия для подростков
                                </p>
                            </li>
                            <li className={classes.service__content_item}>
                                <img src="img/service-img3.png" alt="Парная фотосессия"
                                     className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Парная фотосессия
                                </p>
                            </li>
                            <li className={classes.service__content_item}>
                                <img src="img/service-img4.png" alt="Фотосессия для парней"
                                     className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Фотосессия для парней
                                </p>
                            </li>
                            <li className={classes.service__content_item}>
                                <img src="img/service-img5.png" alt="Семейная фотосессия (дети +14)"
                                     className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Семейная фотосессия (дети +14)
                                </p>
                            </li>
                            <li className={classes.service__content_item}>
                                <img src="img/service-img6.png" alt="Групповая фотосессия"
                                     className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Групповая фотосессия
                                </p>
                            </li>
                            <li className={classes.service__content_item}>
                                <img src="img/service-img7.png" alt="Фотосессия Лук Бук"
                                     className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Фотосессия для Лук Бук
                                </p>
                            </li>
                            <li className={classes.service__content_item}>
                                <img src="img/service-img8.png" alt="Фотосессия для девушек"
                                     className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Фотосессия для девушек
                                </p>
                            </li>
                            <li className={classes.service__content_item}>
                                <img src="img/service-img9.png" alt="Фотосессия для беременных"
                                     className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Фотосессия для беременных
                                </p>
                            </li>
                            <li className={classes.service__content_item}>
                                <img src="img/service-img10.png" alt="Фотосессия с животными"
                                     className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Фотосессия с животными
                                </p>
                            </li>
                            <li className={classes.service__content_item}>
                                <img src="img/service-img11.png" alt="Фотосессия 'Деловой стиль'"
                                     className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Фотосессия "Деловой стиль"
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Service;