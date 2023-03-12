import React, {Component} from "react";
import classes from "../OurWorks.module.scss"

export class Slide extends Component{

    render(){
        const {img, className} = this.props;

        return (
            <div className={`${classes.slider__body_item} ${className}`}>
                <img src={img} className={classes.slider__body_img} alt="ourWorks"
                     tabIndex="0" role="link"/>
            </div>
        )
    }
}