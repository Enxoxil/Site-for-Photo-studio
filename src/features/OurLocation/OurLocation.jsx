import React, {Component} from 'react';
import classes from './OurLocation.module.scss'

class OurLocation extends Component {
    render() {
        return (
            <section className={classes.ourLocation}>
                <div className={classes.ourLocation__container}>
                    <h2 className={`${classes.ourLocation__title} _h2_title`}>
                        Наши локации
                    </h2>
                    <div className={`${classes.ourLocation__content} _slider`}>
                        <div className={`${classes.slider_ourLocation} ${classes.__wrapper}`}>
                            <div className={classes.slider_ourLocation__arrows}>
                                <button className={`${classes.slider_ourLocation__arrows_left}  _left_arrow`}>
                                    <span></span>
                                </button>
                                <button className={`${classes.slider_ourLocation__arrows_right} _right_arrow`}>
                                    <span></span>
                                </button>
                            </div>
                            <ul className={classes.slider_ourLocation__body}>
                                <li className={classes.slider_ourLocation__body_item} data-slideNumber="1">
                                    <img src="img/ourLocation-1.jpg" className={classes.slider_ourLocation__body_img}
                                         alt="ourWorks" tabIndex="0"/>
                                    <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                                </li>
                                <li className={classes.slider_ourLocation__body_item} data-slideNumber="2">
                                    <img src="img/ourLocation-2.jpg" className={classes.slider_ourLocation__body_img}
                                         alt="ourWorks" tabIndex="0"/>
                                    <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                                </li>
                                <li className={classes.slider_ourLocation__body_item} data-slideNumber="3">
                                    <img src="img/ourLocation-3.jpg" className={classes.slider_ourLocation__body_img}
                                         alt="ourWorks" tabIndex="0"/>
                                    <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                                </li>

                                <li className={classes.slider_ourLocation__body_item} data-slideNumber="1">
                                    <img src="img/ourLocation-1.jpg" className={classes.slider_ourLocation__body_img}
                                         alt="ourWorks" tabIndex="0"/>
                                    <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                                </li>
                                <li className={classes.slider_ourLocation__body_item} data-slideNumber="2">
                                    <img src="img/ourLocation-2.jpg" className={classes.slider_ourLocation__body_img}
                                         alt="ourWorks" tabIndex="0"/>
                                    <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                                </li>
                                <li className={classes.slider_ourLocation__body_item} data-slideNumber="3">
                                    <img src="img/ourLocation-3.jpg" className={classes.slider_ourLocation__body_img}
                                         alt="ourWorks" tabIndex="0"/>
                                    <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                                </li>

                                <li className={classes.slider_ourLocation__body_item} data-slideNumber="1">
                                    <img src="img/ourLocation-1.jpg" className={classes.slider_ourLocation__body_img}
                                         alt="ourWorks" tabIndex="0"/>
                                    <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                                </li>
                                <li className={classes.slider_ourLocation__body_item} data-slideNumber="2">
                                    <img src="img/ourLocation-2.jpg" className={classes.slider_ourLocation__body_img}
                                         alt="ourWorks" tabIndex="0"/>
                                    <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                                </li>
                                <li className={classes.slider_ourLocation__body_item} data-slideNumber="3">
                                    <img src="img/ourLocation-3.jpg" className={classes.slider_ourLocation__body_img}
                                         alt="ourWorks" tabIndex="0"/>
                                    <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                                </li>

                                <li className={classes.slider_ourLocation__body_item} data-slideNumber="1">
                                    <img src="img/ourLocation-1.jpg" className={classes.slider_ourLocation__body_img}
                                         alt="ourWorks" tabIndex="0"/>
                                    <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                                </li>
                                <li className={classes.slider_ourLocation__body_item} data-slideNumber="2">
                                    <img src="img/ourLocation-2.jpg" className={classes.slider_ourLocation__body_img}
                                         alt="ourWorks" tabIndex="0"/>
                                    <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                                </li>
                                <li className={classes.slider_ourLocation__body_item} data-slideNumber="3">
                                    <img src="img/ourLocation-3.jpg" className={classes.slider_ourLocation__body_img}
                                         alt="ourWorks" tabIndex="0"/>
                                    <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className={classes.ourLocation__btn_container}>
                        <button className={`${classes.ourLocation__btn} _openModalButton`} type="button"
                                data-modal-class-name="ourLocationModal">
                            выбрать локацию
                        </button>
                    </div>
                </div>
            </section>
        )
            ;
    }
}

export default OurLocation;