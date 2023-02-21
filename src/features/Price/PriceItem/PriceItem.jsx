import React, {Component} from 'react';
import classes from "./PriceItem.module.scss";
import Card from "../../../ui/components/Card/Card";
import Button from "../../../ui/components/Button/Button";

class PriceItem extends Component {
    render() {
        const {backgroundClassName, name, moneySymbol, cost, valueOfLocations, options } = this.props;
        return (
            <>
                <div className={classes.item_box__container}>
                    <Card className={`${classes.item_box__wrapper} ${backgroundClassName}`}>
                        <div className={classes.item_box__header}>
                            <p className={classes.item_box__name}>{name}</p>
                            <p className={classes.item_box__cost}>
                                <span data-cost="">{cost}</span>
                                <span className={classes._cost_value}>{moneySymbol}</span>
                            </p>
                            <p className={classes.item_box__value}>{valueOfLocations}</p>
                        </div>
                        <ul className={classes.item_box__body}>
                            {options.map(item =>
                                <Card
                                    key={item}
                                    className={`${classes.item_box__body_item} _icon_list_style_image`}
                                >
                                    {`${item}`}
                                </Card>
                            )}
                        </ul>
                        <div className={`${classes.item_box__footer} ${classes.box_footer}`}>
                            <h5 className={classes.box_footer__title}>
                                Дополнительные услуги
                            </h5>
                            <div className={classes.box_footer__box}>
                                <div className={classes.box_footer__item}>
                                    <Button className={classes.box_footer__button}>
                                        Помощь
                                        <br/>
                                        в позировании
                                    </Button>
                                </div>
                                <div className={classes.box_footer__item}>
                                    <Button className={classes.box_footer__button}>
                                        Визажист
                                        <br/>
                                        + 2000
                                        <span className={classes._cost_value}>₴</span>
                                    </Button>
                                </div>
                                <div className={classes.box_footer__item}>
                                    <Button className={classes.box_footer__button}>
                                        Дополнительная ретушь
                                        <br/>
                                        фото — 1 шт. / 250
                                        <span className={classes._cost_value}>₴</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.item_box__button_container}>
                            <Button className={`${classes.item_box__button} _button`}>Забронировать</Button>
                        </div>
                    </Card>
                </div>
            </>
        );
    }
}

export default PriceItem;