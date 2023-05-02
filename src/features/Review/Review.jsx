import React from 'react';
import classes from './Review.module.scss';
import Button from '../../ui/components/Button/Button';

// TODO Add slider lib
const Review = () => {
  return (
      <section className={classes.review}>
          <div className={`${classes.review__container} _container`}>
              <h2 className="classes.review__title _h2_title _scrollTo" id="review__title">Отзывы</h2>
              <div className={classes.review__wrapper}>
                  <div className="classes.review__box">
                      <div className={`${classes.review__slider} _slider`}>
                          <div className={`${classes.review__slider_wrapper} _wrapper`}>
                              <div className={classes.review__slider_arrows}>
                                  <Button className="classes.review__slider_arrow_left _left_arrow">
                                      <span />
                                  </Button>
                                  <Button className="classes.review__slider_arrow_right _right_arrow">
                                      <span />
                                  </Button>
                              </div>
                              {/* TODO Add slider lib */}
                              <ul className={classes.review__slider_body}>
                                  <li className={classes.review__slider_item}>
                                      <img
                                        src="img/section-review1.png"
                                        className={classes.review__slider_item_img}
                                        alt="Maria"
                                      />
                                      <p className={classes.review__slider_item_name}>Название слайда</p>
                                      <p className={classes.review__slider_item_text}>
                                          Съешь еще этих мягких французских булок, да выпей
                                          чаю. Съешь еще этих мягких французских булок, да
                                          выпей чаю. Съешь еще этих мягких французских булок,
                                          да выпей чаю.
                                      </p>
                                      <div className="review__slider_item_btn_container">
                                          <button className={classes.review__slider_item_btn}>
                                              Показать ещё
                                          </button>
                                      </div>
                                  </li>
                                  <li className={classes.review__slider_item}>
                                      <img
                                        src="img/section-review2.png"
                                        className={classes.review__slider_item_img}
                                        alt="Maria"
                                      />
                                      <p className={classes.review__slider_item_name}>Название слайда</p>
                                      <p className={classes.review__slider_item_text}>
                                          Съешь еще этих мягких французских булок, да выпей
                                          чаю. Съешь еще этих мягких французских булок, да
                                          выпей чаю. Съешь еще этих мягких французских булок,
                                          да выпей чаю.
                                      </p>
                                      <div className="review__slider_item_btn_container">
                                          <button className={classes.review__slider_item_btn}>
                                              Показать ещё
                                          </button>
                                      </div>
                                  </li>
                                  <li className={classes.review__slider_item}>
                                      <img
                                        src="img/section-review3.png"
                                        className={classes.review__slider_item_img}
                                        alt="Maria"
                                      />
                                      <p className={classes.review__slider_item_name}>Название слайда</p>
                                      <p className={classes.review__slider_item_text}>
                                          Съешь еще этих мягких французских булок, да выпей
                                          чаю. Съешь еще этих мягких французских булок, да
                                          выпей чаю. Съешь еще этих мягких французских булок,
                                          да выпей чаю.
                                      </p>
                                      <div className="review__slider_item_btn_container">
                                          <button className={classes.review__slider_item_btn}>
                                              Показать ещё
                                          </button>
                                      </div>
                                  </li>
                                  <li className={classes.review__slider_item}>
                                      <img
                                        src="img/section-review1.png"
                                        className={classes.review__slider_item_img}
                                        alt="Maria"
                                      />
                                      <p className={classes.review__slider_item_name}>Название слайда</p>
                                      <p className={classes.review__slider_item_text}>
                                          Съешь еще этих мягких французских булок, да выпей
                                          чаю. Съешь еще этих мягких французских булок, да
                                          выпей чаю. Съешь еще этих мягких французских булок,
                                          да выпей чаю.
                                      </p>
                                      <div className="review__slider_item_btn_container">
                                          <button className={classes.review__slider_item_btn}>
                                              Показать ещё
                                          </button>
                                      </div>
                                  </li>
                                  <li className={classes.review__slider_item}>
                                      <img
                                        src="img/section-review2.png"
                                        className={classes.review__slider_item_img}
                                        alt="Maria"
                                      />
                                      <p className={classes.review__slider_item_name}>Название слайда</p>
                                      <p className={classes.review__slider_item_text}>
                                          Съешь еще этих мягких французских булок, да выпей
                                          чаю. Съешь еще этих мягких французских булок, да
                                          выпей чаю. Съешь еще этих мягких французских булок,
                                          да выпей чаю.
                                      </p>
                                      <div className="review__slider_item_btn_container">
                                          <button className={classes.review__slider_item_btn}>
                                              Показать ещё
                                          </button>
                                      </div>
                                  </li>
                                  <li className={classes.review__slider_item}>
                                      <img
                                        src="img/section-review3.png"
                                        className={classes.review__slider_item_img}
                                        alt="Maria"
                                      />
                                      <p className={classes.review__slider_item_name}>Название слайда</p>
                                      <p className={classes.review__slider_item_text}>
                                          Съешь еще этих мягких французских булок, да выпей
                                          чаю. Съешь еще этих мягких французских булок, да
                                          выпей чаю. Съешь еще этих мягких французских булок,
                                          да выпей чаю.
                                      </p>
                                      <div className="review__slider_item_btn_container">
                                          <Button className={classes.review__slider_item_btn}>
                                              Показать ещё
                                          </Button>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className={classes.review__btn_container}>
                          <Button className={`${classes.review__btn} _button _openModalButton`}>
                              Добавить отзыв
                          </Button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Review;
