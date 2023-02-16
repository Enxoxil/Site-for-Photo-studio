import React, {Component} from 'react';
import classes from "./Service.module.scss";
import Card from "../../ui/components/Card/Card";
import Image from "../../ui/components/Image/Image";

//import images
import service_img1 from '../../assets/img/service-img1.png'
import service_img2 from '../../assets/img/service-img2.png'
import service_img3 from '../../assets/img/service-img3.png'
import service_img4 from '../../assets/img/service-img4.png'
import service_img5 from '../../assets/img/service-img5.png'
import service_img6 from '../../assets/img/service-img6.png'
import service_img7 from '../../assets/img/service-img7.png'
import service_img8 from '../../assets/img/service-img8.png'
import service_img9 from '../../assets/img/service-img9.png'
import service_img10 from '../../assets/img/service-img10.png'
import service_img11 from '../../assets/img/service-img11.png'

class Service extends Component {
    render() {
        return (
            <section className={classes.service}>
                <div className={classes.service__container}>
                    <div className={classes.service__wrapper}>
                        <h2 className={`${classes.service__title} _h2_title _scrollTo`} id="service__title">Виды
                            услуг</h2>
                        <ul className={classes.service__content_box}>
                            <Card className={classes.service__content_item}>
                                <Image src={service_img1} alt="Фотосессия Лав Стори"
                                       className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Фотосессия Лав Стори
                                </p>
                            </Card>
                            <Card className={classes.service__content_item}>
                                <Image src={service_img2} alt="Фотосессия для подростков"
                                       className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Фотосессия для подростков
                                </p>
                            </Card>
                            <Card className={classes.service__content_item}>
                                <Image src={service_img3} alt="Парная фотосессия"
                                       className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Парная фотосессия
                                </p>
                            </Card>
                            <Card className={classes.service__content_item}>
                                <Image src={service_img4} alt="Фотосессия для парней"
                                       className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Фотосессия для парней
                                </p>
                            </Card>
                            <Card className={classes.service__content_item}>
                                <Image src={service_img5} alt="Семейная фотосессия (дети +14)"
                                       className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Семейная фотосессия (дети +14)
                                </p>
                            </Card>
                            <Card className={classes.service__content_item}>
                                <Image src={service_img6} alt="Групповая фотосессия"
                                       className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Групповая фотосессия
                                </p>
                            </Card>
                            <Card className={classes.service__content_item}>
                                <Image src={service_img7} alt="Фотосессия Лук Бук"
                                       className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Фотосессия для Лук Бук
                                </p>
                            </Card>
                            <Card className={classes.service__content_item}>
                                <Image src={service_img8} alt="Фотосессия для девушек"
                                       className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Фотосессия для девушек
                                </p>
                            </Card>
                            <Card className={classes.service__content_item}>
                                <Image src={service_img9} alt="Фотосессия для беременных"
                                       className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Фотосессия для беременных
                                </p>
                            </Card>
                            <Card className={classes.service__content_item}>
                                <Image src={service_img10} alt="Фотосессия с животными"
                                       className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Фотосессия с животными
                                </p>
                            </Card>
                            <Card className={classes.service__content_item}>
                                <Image src={service_img11} alt="Фотосессия 'Деловой стиль'"
                                       className={classes.service__content_img}/>
                                <p className={classes.service__content_text}>
                                    Фотосессия "Деловой стиль"
                                </p>
                            </Card>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Service;