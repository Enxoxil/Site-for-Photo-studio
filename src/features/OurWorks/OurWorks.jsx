import React, {useState} from 'react';
import classes from './OurWorks.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Slide} from "./Slide/Slide";
import "swiper/css/bundle";

import SwiperCore, {EffectCoverflow, Navigation, Pagination} from "swiper/core";

import ourWorks_1 from '../../assets/img/ourWorks-1.webp'
import ourWorks_2 from '../../assets/img/ourWorks-2.webp'
import ourWorks_3 from '../../assets/img/ourWorks-3.webp'

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

//TODO divide for components

const initialValue = [ourWorks_1, ourWorks_2, ourWorks_3, ourWorks_1, ourWorks_2, ourWorks_3, ourWorks_1, ourWorks_2, ourWorks_3,]

const OurWorks = () => {
    const [images] = useState(initialValue)
    return (
        <section className={classes.ourWorks}>
            <div className={classes.ourWorks__container}>
                <h2 className={`ourWorks__title _h2_title _scrollTo`} id="ourWorks__title">
                    Наши работы
                </h2>

                <div className={`ourWorks__content _slider`}>
                    <div className={`${classes.slider} classes._wrapper`}>

                        <Swiper
                            navigation={
                                {
                                    nextEl: '._right_arrow',
                                    prevEl: '._left_arrow',
                                }}
                            effect={"coverflow"}
                            centeredSlides={true}
                            slidesPerView={2}
                            loop={true}
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
                            slideToClickedSlide={true}
                            className="mySwiper"

                        >
                            {images.map((item, index) => (
                                <SwiperSlide key={index}>{() =>
                                    (
                                        <Slide img={item} className='slider__body_item'/>
                                    )}
                                </SwiperSlide>))}
                        </Swiper>
                        <div className={classes.slider__arrows}>
                            <button className={`${classes.slider__arrows_left} _left_arrow`}>
                                <span></span>
                            </button>

                            <button className={`${classes.slider__arrows_right}  _right_arrow`}>
                                <span></span>
                            </button>
                        </div>

                        <div className={`${classes.slider__dots} _pagination`} data-pagination="slider__dots">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default OurWorks;


