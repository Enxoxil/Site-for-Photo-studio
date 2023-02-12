import React, {Component} from 'react';
import classes from './Review.module.scss'

class Review extends Component {

    render() {
        return (
            <section className={classes.review}>
                <div className={`${classes.review__container} _container`}>
                    <h2 className={`${classes.review__title} _h2_title _scrollTo`} id="review__title">Отзывы</h2>
                    <div className={classes.review__wrapper}>
                        <div className={classes.review__box}>
                            <div className={`${classes.review__slider} _slider`}>
                                <div className={`${classes.review__slider_wrapper} _wrapper`}>
                                    <div className={classes.review__slider_arrows}>
                                        <button className={`${classes.review__slider_arrow_left} _left_arrow`}>
                                            <span></span>
                                        </button>
                                        <button className={`${classes.review__slider_arrow_right} _right_arrow`}>
                                            <span></span>
                                        </button>
                                    </div>
                                    <ul className={classes.review__slider_body}>
                                        <li className={classes.review__slider_item} data-slideNumber="1">
                                            <img src="img/section-review1.png"
                                                 className={classes.review__slider_item_img}
                                                 alt="Maria" tabIndex="0"/>
                                            <p className={classes.review__slider_item_name}>Название слайда</p>
                                            <p className={classes.review__slider_item_text}>
                                                Съешь еще этих мягких французских булок, да выпей
                                                чаю. Съешь еще этих мягких французских булок, да
                                                выпей чаю. Съешь еще этих мягких французских булок,
                                                да выпей чаю.
                                            </p>
                                            <div className={classes.review__slider_item_btn_container}>
                                                <button className={classes.review__slider_item_btn}>Показать ещё
                                                </button>
                                            </div>
                                        </li>
                                        <li className={classes.review__slider_item} data-slideNumber="2">
                                            <img src="img/section-review2.png"
                                                 className={classes.review__slider_item_img}
                                                 alt="Maria" tabIndex="0"/>
                                            <p className={classes.review__slider_item_name}>Название слайда</p>
                                            <p className={classes.review__slider_item_text}>
                                                Съешь еще этих мягких французских булок, да выпей
                                                чаю. Съешь еще этих мягких французских булок, да
                                                выпей чаю. Съешь еще этих мягких французских булок,
                                                да выпей чаю.
                                            </p>
                                            <div className={classes.review__slider_item_btn_container}>
                                                <button className={classes.review__slider_item_btn}>Показать ещё
                                                </button>
                                            </div>
                                        </li>
                                        <li className={classes.review__slider_item} data-slideNumber="3">
                                            <img src="img/section-review3.png"
                                                 className={classes.review__slider_item_img}
                                                 alt="Maria" tabIndex="0"/>
                                            <p className={classes.review__slider_item_name}>Название слайда</p>
                                            <p className={classes.review__slider_item_text}>
                                                Съешь еще этих мягких французских булок, да выпей
                                                чаю. Съешь еще этих мягких французских булок, да
                                                выпей чаю. Съешь еще этих мягких французских булок,
                                                да выпей чаю.
                                            </p>
                                            <div className={classes.review__slider_item_btn_container}>
                                                <button className={classes.review__slider_item_btn}>Показать ещё
                                                </button>
                                            </div>
                                        </li>
                                        <li className={classes.review__slider_item} data-slideNumber="4">
                                            <img src="img/section-review1.png"
                                                 className={classes.review__slider_item_img}
                                                 alt="Maria" tabIndex="0"/>
                                            <p className={classes.review__slider_item_name}>Название слайда</p>
                                            <p className={classes.review__slider_item_text}>
                                                Съешь еще этих мягких французских булок, да выпей
                                                чаю. Съешь еще этих мягких французских булок, да
                                                выпей чаю. Съешь еще этих мягких французских булок,
                                                да выпей чаю.
                                            </p>
                                            <div className={classes.review__slider_item_btn_container}>
                                                <button className={classes.review__slider_item_btn}>Показать ещё
                                                </button>
                                            </div>
                                        </li>
                                        <li className={classes.review__slider_item} data-slideNumber="5">
                                            <img src="img/section-review2.png"
                                                 className={classes.review__slider_item_img}
                                                 alt="Maria" tabIndex="0"/>
                                            <p className={classes.review__slider_item_name}>Название слайда</p>
                                            <p className={classes.review__slider_item_text}>
                                                Съешь еще этих мягких французских булок, да выпей
                                                чаю. Съешь еще этих мягких французских булок, да
                                                выпей чаю. Съешь еще этих мягких французских булок,
                                                да выпей чаю.
                                            </p>
                                            <div className={classes.review__slider_item_btn_container}>
                                                <button className={classes.review__slider_item_btn}>Показать ещё
                                                </button>
                                            </div>
                                        </li>
                                        <li className={classes.review__slider_item} data-slideNumber="6">
                                            <img src="img/section-review3.png"
                                                 className={classes.review__slider_item_img}
                                                 alt="Maria" tabIndex="0"/>
                                            <p className={classes.review__slider_item_name}>Название слайда</p>
                                            <p className={classes.review__slider_item_text}>
                                                Съешь еще этих мягких французских булок, да выпей
                                                чаю. Съешь еще этих мягких французских булок, да
                                                выпей чаю. Съешь еще этих мягких французских булок,
                                                да выпей чаю.
                                            </p>
                                            <div className={classes.review__slider_item_btn_container}>
                                                <button className={classes.review__slider_item_btn}>Показать ещё
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={classes.review__btn_container}>
                                <button className={`${classes.review__btn} _button _openModalButton`} type="button"
                                        data-modal-class-name="reviewModal">Добавить отзыв
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Review;