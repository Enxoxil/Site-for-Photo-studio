import React, {Component} from 'react';
import classes from './OurWorks.module.scss';
//TODO add slider library

class OurWorks extends Component {
    render() {
        return (
            <section className={classes.ourWorks}>
                <div className={classes.ourWorks__container}>
                    <h2 className={`${classes.ourWorks__title} _h2_title _scrollTo`} id="ourWorks__title">
                        Наши работы
                    </h2>

                    {/*TODO add slider library*/}
                    <div className={`${classes.ourWorks__content} _slider`}>
                        <div className={`${classes.slider} ${classes._wrapper}`}>
                            <div className={classes.slider__arrows}>
                                <button className={`${classes.slider__arrows_left} _left_arrow`}>
                                    <span></span>
                                </button>
                                <button className={`${classes.slider__arrows_right} _right_arrow`}>
                                    <span></span>
                                </button>
                            </div>
                            <ul className={classes.slider__body}>
                                <li className={classes.slider__body_item} >
                                    <img src="img/ourWorks-2.jpg" className={classes.slider__body_img} alt="ourWorks"
                                         tabIndex="0" role="link"/>
                                </li>
                                <li className={classes.slider__body_item} >
                                    <img src="img/ourWorks-3.jpg" className={classes.slider__body_img} alt="ourWorks"
                                         tabIndex="0" role="link"/>
                                </li>
                                <li className={classes.slider__body_item} >
                                    <img src="img/ourWorks-1.jpg" className={classes.slider__body_img} alt="ourWorks"
                                         tabIndex="0" role="link"/>
                                </li>
                                <li className={classes.slider__body_item} >
                                    <img src="img/ourWorks-2.jpg" className={classes.slider__body_img} alt="ourWorks"
                                         tabIndex="0" role="link"/>
                                </li>
                                <li className={classes.slider__body_item} >
                                    <img src="img/ourWorks-3.jpg" className={classes.slider__body_img} alt="ourWorks"
                                         tabIndex="0" role="link"/>
                                </li>
                                <li className={classes.slider__body_item} >
                                    <img src="img/ourWorks-1.jpg" className={classes.slider__body_img} alt="ourWorks"
                                         tabIndex="0" role="link"/>
                                </li>
                                <li className={classes.slider__body_item} >
                                    <img src="img/ourWorks-2.jpg" className={classes.slider__body_img} alt="ourWorks"
                                         tabIndex="0" role="link"/>
                                </li>
                                <li className={classes.slider__body_item} >
                                    <img src="img/ourWorks-3.jpg" className={classes.slider__body_img} alt="ourWorks"
                                         tabIndex="0" role="link"/>
                                </li>
                                <li className={classes.slider__body_item} >
                                    <img src="img/ourWorks-1.jpg" className={classes.slider__body_img} alt="ourWorks"
                                         tabIndex="0" role="link"/>
                                </li>
                                <li className={classes.slider__body_item} >
                                    <img src="img/ourWorks-2.jpg" className={classes.slider__body_img} alt="ourWorks"
                                         tabIndex="0" role="link"/>
                                </li>
                                <li className={classes.slider__body_item} >
                                    <img src="img/ourWorks-3.jpg" className={classes.slider__body_img} alt="ourWorks"
                                         tabIndex="0" role="link"/>
                                </li>
                                <li className={classes.slider__body_item} >
                                    <img src="img/ourWorks-1.jpg" className={classes.slider__body_img} alt="ourWorks"
                                         tabIndex="0" role="link"/>
                                </li>

                            </ul>
                            <div className={classes.slider__dots} data-pagination="slider__dots">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default OurWorks;