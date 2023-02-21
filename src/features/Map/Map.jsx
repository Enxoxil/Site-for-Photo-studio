import React, {Component} from 'react';
import classes from './Map.module.scss'
import Location from "./Location/Location";
import MapForm from "./MapForm/MapForm";

class Map extends Component {
    render() {
        return (<section className={`${classes.map} _scrollTo`}>
                <div className={`${classes.map__container} _container`} id="map__wrapper">
                    <div className={classes.map__wrapper}>
                        <div className={classes.map__body}>
                            <Location />
                            <div className={`${classes.map__form} form theme_background_color_blue`}>
                            <MapForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Map;