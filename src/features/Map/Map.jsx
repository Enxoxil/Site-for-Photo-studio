import React, {Component} from 'react';
import classes from './Map.module.scss'
import Image from "../../ui/components/Image/Image";


//Import image
import logo from '../../assets/img/logo-white.png';
import Button from "../../ui/components/Button/Button";
import Form from "./MapForm/MapForm";
import Input from "../../ui/components/Input/Input";
import Location from "./Location/Location";

class Map extends Component {
    render() {
        return (<section className={`${classes.map} _scrollTo`}>
                <div className={`${classes.map__container} _container`} id="map__wrapper">
                    <div className={classes.map__wrapper}>
                        <div className={classes.map__body}>
                            <Location />
                            <div className={`${classes.map__form} form theme_background_color_blue`}>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Map;