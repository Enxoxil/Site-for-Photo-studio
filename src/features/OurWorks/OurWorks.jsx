import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './OurWorks.module.scss';
import { Slide } from './Slide/Slide';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/bundle';

// eslint-disable-next-line import/order,import/no-unresolved
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper/core';
import ourWorks1 from '../../assets/img/ourWorks-1.webp';
import ourWorks2 from '../../assets/img/ourWorks-2.webp';
import ourWorks3 from '../../assets/img/ourWorks-3.webp';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

// TODO divide for components

const initialValue = [
  ourWorks1, ourWorks2, ourWorks3, ourWorks1, ourWorks2, ourWorks3, ourWorks1, ourWorks2, ourWorks3,
];

const OurWorks = () => {
  const [images] = useState(initialValue);
  return (
      <section className={classes.ourWorks}>
          <div className={classes.ourWorks__container}>
              <h2 className="ourWorks__title _h2_title _scrollTo" id="ourWorks__title">
                  Наши работы
              </h2>

              <div className="ourWorks__content _slider">
                  <div className={`${classes.slider} classes._wrapper`}>

                      <Swiper
                        navigation={
                                {
                                  nextEl: '._right_arrow',
                                  prevEl: '._left_arrow',
                                }
}
                        effect="coverflow"
                        centeredSlides
                        slidesPerView={2}
                        loop
                        coverflowEffect={{
                          rotate: 40,
                          stretch: 0,
                          depth: 200,
                          modifier: 1,
                        }}
                        pagination={{
                          clickable: true,
                          el: '._pagination',
                        }}
                        autoplay={{
                          delay: 1000,
                        }}
                        slideToClickedSlide
                        className="mySwiper"
                      >
                          {images.map((item, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                              <SwiperSlide key={index}>
                                  {() => (
                                      <Slide img={item} className="slider__body_item" />
                                  )}
                              </SwiperSlide>
                          ))}
                      </Swiper>
                      <div className={classes.slider__arrows}>
                          <button className={`${classes.slider__arrows_left} _left_arrow`}>
                              <span />
                          </button>

                          <button className={`${classes.slider__arrows_right}  _right_arrow`}>
                              <span />
                          </button>
                      </div>

                      <div className={`${classes.slider__dots} _pagination`} data-pagination="slider__dots" />
                  </div>
              </div>
          </div>
      </section>
  );
};

export default OurWorks;
