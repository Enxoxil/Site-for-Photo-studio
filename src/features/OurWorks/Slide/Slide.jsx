import React from 'react';
import classes from '../OurWorks.module.scss';

export const Slide = (props) => {
  const {
    img,
    className
  } = props;

  return (
      <div className={`${classes.slider__body_item} ${className}`}>
          <img
            src={img}
            className={classes.slider__body_img}
            alt="ourWorks"
          />
      </div>
  );
};
