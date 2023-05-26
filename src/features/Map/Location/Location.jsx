import React from 'react';
import { Trans } from 'react-i18next';
import classes from '../Map.module.scss';
import Image from '../../../ui/components/Image/Image';
import Tel from '../../../ui/components/Tel/Tel';
import Mail from '../../../ui/components/Mail/Mail';

// import img
import logo from '../../../assets/img/logo-white.png';

const Location = () => (
    <div className={`${classes.map__item} item`}>
        <div className={`${classes.item__box} theme_background_color_black`}>
            <div className={classes.item__box_logo}>
                <Image src={logo} alt="logo" className="item__box_img" />
            </div>
            <Tel tel="+38 (093) 0930939" className={classes.item__box_num} id="map__num" />
            <Mail mail="content@addmarkets.ru" className={classes.item__box_link} />

            <p className={classes.item__box_text}>
                <Trans i18nKey="mapSection.popoverText" />
                <Trans i18nKey="mapSection.popoverTime" />
            </p>
        </div>
    </div>
);

export default Location;
