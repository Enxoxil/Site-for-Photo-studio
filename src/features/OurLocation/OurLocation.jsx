import React from 'react';
import classes from './OurLocation.module.scss';
import Button from '../../ui/components/Button/Button';

// TODO не забути підключити лібу для слайдеру

const OurLocation = () => (
    <section className={classes.ourLocation}>
        <div className={classes.ourLocation__container}>
            <h2 className={`${classes.ourLocation__title} _h2_title`}>
                Наши локации
            </h2>
            <div className="classes.ourLocation__content _slider">
                <div className={`${classes.slider_ourLocation} ${classes.__wrapper}`}>
                    <div className={classes.slider_ourLocation__arrows}>
                        <Button className={`${classes.slider_ourLocation__arrows_left}  _left_arrow`}>
                            <span />
                        </Button>
                        <Button className={`${classes.slider_ourLocation__arrows_right} _right_arrow`}>
                            <span />
                        </Button>
                    </div>

                    {/* TODO Слайдер зробити лібою */}
                    <ul className={classes.slider_ourLocation__body}>
                        <li className={classes.slider_ourLocation__body_item}>
                            <img
                              src="img/ourLocation-1.jpg"
                              className={classes.slider_ourLocation__body_img}
                              alt="ourWorks"
                            />
                            <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                        </li>
                        <li className={classes.slider_ourLocation__body_item}>
                            <img
                              src="img/ourLocation-2.jpg"
                              className={classes.slider_ourLocation__body_img}
                              alt="ourWorks"
                            />
                            <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                        </li>
                        <li className={classes.slider_ourLocation__body_item}>
                            <img
                              src="img/ourLocation-3.jpg"
                              className={classes.slider_ourLocation__body_img}
                              alt="ourWorks"
                            />
                            <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                        </li>

                        <li className={classes.slider_ourLocation__body_item}>
                            <img
                              src="img/ourLocation-1.jpg"
                              className={classes.slider_ourLocation__body_img}
                              alt="ourWorks"
                            />
                            <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                        </li>
                        <li className={classes.slider_ourLocation__body_item}>
                            <img
                              src="img/ourLocation-2.jpg"
                              className={classes.slider_ourLocation__body_img}
                              alt="ourWorks"
                            />
                            <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                        </li>
                        <li className={classes.slider_ourLocation__body_item}>
                            <img
                              src="img/ourLocation-3.jpg"
                              className={classes.slider_ourLocation__body_img}
                              alt="ourWorks"
                            />
                            <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                        </li>

                        <li className={classes.slider_ourLocation__body_item}>
                            <img
                              src="img/ourLocation-1.jpg"
                              className={classes.slider_ourLocation__body_img}
                              alt="ourWorks"
                            />
                            <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                        </li>
                        <li className={classes.slider_ourLocation__body_item}>
                            <img
                              src="img/ourLocation-2.jpg"
                              className={classes.slider_ourLocation__body_img}
                              alt="ourWorks"
                            />
                            <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                        </li>
                        <li className={classes.slider_ourLocation__body_item}>
                            <img
                              src="img/ourLocation-3.jpg"
                              className={classes.slider_ourLocation__body_img}
                              alt="ourWorks"
                            />
                            <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                        </li>

                        <li className={classes.slider_ourLocation__body_item}>
                            <img
                              src="img/ourLocation-1.jpg"
                              className={classes.slider_ourLocation__body_img}
                              alt="ourWorks"
                            />
                            <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                        </li>
                        <li className={classes.slider_ourLocation__body_item}>
                            <img
                              src="img/ourLocation-2.jpg"
                              className={classes.slider_ourLocation__body_img}
                              alt="ourWorks"
                            />
                            <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                        </li>
                        <li className={classes.slider_ourLocation__body_item}>
                            <img
                              src="img/ourLocation-3.jpg"
                              className={classes.slider_ourLocation__body_img}
                              alt="ourWorks"
                            />
                            <p className={classes.slider_ourLocation__body_name}>Название слайда</p>
                        </li>

                    </ul>
                </div>
            </div>
            <div className={classes.ourLocation__btn_container}>
                <Button
                  className={`${classes.ourLocation__btn} _openModalButton`}
                  type="button"
                  data-modal-class-name="ourLocationModal"
                >
                    выбрать локацию
                </Button>
            </div>
        </div>
    </section>
);

export default OurLocation;
