import React, {Component} from 'react';
import classes from './OurWorks.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Slide} from "./Slide/Slide";

import "swiper/css/bundle";


import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
} from "swiper/core";

import ourWorks_1 from '../../assets/img/ourWorks-1.webp'
import ourWorks_2 from '../../assets/img/ourWorks-2.webp'
import ourWorks_3 from '../../assets/img/ourWorks-3.webp'

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

class OurWorks extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            img: [ourWorks_1, ourWorks_2, ourWorks_3, ourWorks_1, ourWorks_2, ourWorks_3,],
        })
    }

    render() {

        const {img} = this.state;
        return (<section className={classes.ourWorks}>
            <div className={classes.ourWorks__container}>
                <h2 className={`${classes.ourWorks__title} _h2_title _scrollTo`} id="ourWorks__title">
                    Наши работы
                </h2>

                <div className={`${classes.ourWorks__content} _slider`}>
                    <div className={`${classes.slider} ${classes._wrapper}`}>
                        <Swiper
                            navigation={true}
                            effect={"coverflow"}
                            centeredSlides={true}
                            slidesPerView={2}
                            loop={true}
                            coverflowEffect={{
                                rotate: 40,
                                stretch: 0,
                                depth: 200,
                                modifier: 1,
                                slideShadows: true
                            }}
                            pagination={{
                                clickable: true
                            }}
                            className="mySwiper"

                        >
                            {img.map((item, index) => <SwiperSlide>{({isActive}) => (
                                <Slide key={index} img={item} className={isActive ? 'active' : ''}/>)}</SwiperSlide>)}
                        </Swiper>
                        <div className={classes.slider__arrows}>
                            {/*<button className={`${classes.slider__arrows_left} _left_arrow`}>*/}
                            {/*    <span></span>*/}
                            {/*</button>*/}

                            {/*<button className={`${classes.slider__arrows_right} _right_arrow`}>*/}
                            {/*    <span></span>*/}
                            {/*</button>*/}
                        </div>

                        <div className={classes.slider__dots} data-pagination="slider__dots">
                        </div>
                    </div>
                </div>
            </div>
        </section>)
    }
}

export default OurWorks;


// <Slider {...settings} className={classes.slider__body}>
//
//     <div className={classes.slider__body_item}>
//         <img src={ourWorks_1} className={classes.slider__body_img} alt="ourWorks"
//              tabIndex="0" role="link"/>
//     </div>
//     <div className={classes.slider__body_item}>
//         <img src={ourWorks_2} className={classes.slider__body_img} alt="ourWorks"
//              tabIndex="0" role="link"/>
//     </div>
//     <div className={classes.slider__body_item}>
//         <img src={ourWorks_3} className={classes.slider__body_img} alt="ourWorks"
//              tabIndex="0" role="link"/>
//     </div>
//     <div className={classes.slider__body_item}>
//         <img src={ourWorks_1} className={classes.slider__body_img} alt="ourWorks"
//              tabIndex="0" role="link"/>
//     </div>
//     <div className={classes.slider__body_item}>
//         <img src={ourWorks_2} className={classes.slider__body_img} alt="ourWorks"
//              tabIndex="0" role="link"/>
//     </div>
//     <div className={classes.slider__body_item}>
//         <img src={ourWorks_3} className={classes.slider__body_img} alt="ourWorks"
//              tabIndex="0" role="link"/>
//     </div>
//     <div className={classes.slider__body_item}>
//         <img src={ourWorks_1} className={classes.slider__body_img} alt="ourWorks"
//              tabIndex="0" role="link"/>
//     </div>
//     <div className={classes.slider__body_item}>
//         <img src={ourWorks_2} className={classes.slider__body_img} alt="ourWorks"
//              tabIndex="0" role="link"/>
//     </div>
//     <div className={classes.slider__body_item}>
//         <img src={ourWorks_3} className={classes.slider__body_img} alt="ourWorks"
{/*             tabIndex="0" role="link"/>*/
}
{/*    </div>*/
}
{/*</Slider>*/
}