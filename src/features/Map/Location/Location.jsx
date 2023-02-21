import React, {Component} from 'react';
import classes from "../Map.module.scss";
import Image from "../../../ui/components/Image/Image";

//import img
import logo from "../../../assets/img/logo-white.png";
import Tel from "../../../ui/components/Tel/Tel";

class Location extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {} = this.props;
        return (
            <div className={`${classes.map__item} item`}>
                <div className={`${classes.item__box} theme_background_color_black`}>
                    <div className={classes.item__box_logo}>
                        <Image src={logo} alt="logo" className={classes.item__box_img}/>
                    </div>
                    <Tel tel='+38 (093) 0930939' className={classes.item__box_num} id='map__num'/>

                    <a
                        href="mailto:content@addmarkets.ru"
                        className={classes.item__box_link}
                    >
                        content@addmarkets.ru
                    </a>
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