import React, {Component} from 'react';
import classes from './Price.module.scss'
import PriceItem from "./PriceItem/PriceItem";

const initialState = {
    priceItems: [
        {
            name: 'MINI',
            cost: '2500',
            moneySymbol: '₴',
            valueOfLocations: '/ 1 локация',
            themeBackground: 'theme_background_color_blue',
            options: [
                'Длительность — 30 минут',
                'Исходники — До 100 штук',
                'Ретушь — 4 фото',
                'Аренда фотостудии — Бесплатно',
                'Любой образ',
            ],
        },
        {
            name: 'STANDART',
            cost: '5000',
            moneySymbol: '₴',
            valueOfLocations: '/ 2 локации',
            themeBackground: 'theme_background_color_light_pink',
            options: [
                'Длительность — 1 час 20 минут',
                'Исходники — До 200 штук',
                'Ретушь — 8 фото',
                'Аренда фотостудии — Бесплатно',
                'Любой образ',
            ],
        },
        {
            name: 'MAXI',
            cost: 'N',
            moneySymbol: '₴',
            valueOfLocations: '/ Максимальное количество локаций',
            themeBackground: 'theme_background_color_pink',
            options: [
                'Длительность — 4 часа',
                'Исходники — До 500 штук',
                'Ретушь — 50 фото',
                'Аренда фотостудии — Бесплатно',
                'Визажист — Make-Up, Укладка',
                'До 8 образов'
            ],
        },
    ]
}


class Price extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    render() {
        return (<section className={classes.price}>
                <div className={classes.price__container}>
                    <h2 className={`${classes.price__title} _h2_title _scrollTo`} id="price__title">Стоимость
                        фотосессии</h2>
                    <div className={classes.price__box}>
                        <ul className={`${classes.price__items} ${classes.item_box}`}>
                            {this.state.priceItems.map(item => <PriceItem
                                key={item.cost}
                                name={item.name}
                                cost={item.cost}
                                moneySymbol={item.moneySymbol}
                                valueOfLocations={item.valueOfLocations}
                                options={item.options}
                                backgroundClassName={item.themeBackground}
                            />)}
                        </ul>
                    </div>
                </div>
            </section>

        );
    }
}

export default Price;