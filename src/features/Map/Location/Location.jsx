import React, {Component} from 'react';
import classes from "../Map.module.scss";
import Image from "../../../ui/components/Image/Image";
import Tel from "../../../ui/components/Tel/Tel";
import Mail from "../../../ui/components/Mail/Mail";

//import img
import logo from "../../../assets/img/logo-white.png";


class Location extends Component {
    render() {
        return (
            <div className={`${classes.map__item} item`}>
                <div className={`${classes.item__box} theme_background_color_black`}>
                    <div className={classes.item__box_logo}>
                        <Image src={logo} alt="logo" className={classes.item__box_img}/>
                    </div>
                    <Tel tel='+38 (093) 0930939' className={classes.item__box_num} id='map__num'/>
                    <Mail mail='content@addmarkets.ru' className={classes.item__box_link}/>

                    <p className={classes.item__box_text}>
                        <span>Режим работы:</span>
                        <br/>
                        ПН-ПТ 09:00 - 18:00
                    </p>
                </div>
            </div>
        );
    }
}

export default Location;