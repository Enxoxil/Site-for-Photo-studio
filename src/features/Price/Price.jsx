import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import classes from './Price.module.scss';
import PriceItem from './PriceItem/PriceItem';

const initialState = [
  {
    name: 'priceSection.cards.mini.name',
    cost: '2500',
    moneySymbol: '₴',
    valueOfLocations: 'priceSection.cards.mini.valueOfLocations',
    themeBackground: 'theme_background_color_blue',
    options: [
      'priceSection.cards.mini.options.optionsItem_1',
      'priceSection.cards.mini.options.optionsItem_2',
      'priceSection.cards.mini.options.optionsItem_3',
      'priceSection.cards.mini.options.optionsItem_4',
      'priceSection.cards.mini.options.optionsItem_5',
    ],
    btnOptionsTitle: 'priceSection.btnOptionsTitle',
    btnOptions: [
      'priceSection.btnOptions.btnOptions_1',
      'priceSection.btnOptions.btnOptions_2',
      'priceSection.btnOptions.btnOptions_3',
    ],
    btn: 'priceSection.btnName'
  },
  {
    name: 'priceSection.cards.standart.name',
    cost: '5000',
    moneySymbol: '₴',
    valueOfLocations: 'priceSection.cards.standart.valueOfLocations',
    themeBackground: 'theme_background_color_light_pink',
    options: [
      'priceSection.cards.standart.options.optionsItem_1',
      'priceSection.cards.standart.options.optionsItem_2',
      'priceSection.cards.standart.options.optionsItem_3',
      'priceSection.cards.standart.options.optionsItem_4',
      'priceSection.cards.standart.options.optionsItem_5',
    ],
    btnOptionsTitle: 'priceSection.btnOptionsTitle',
    btnOptions: [
      'priceSection.btnOptions.btnOptions_1',
      'priceSection.btnOptions.btnOptions_2',
      'priceSection.btnOptions.btnOptions_3',
    ],
    btn: 'priceSection.btnName'
  },
  {
    name: 'priceSection.cards.maxi.name',
    cost: 'N',
    moneySymbol: '₴',
    valueOfLocations: 'priceSection.cards.maxi.valueOfLocations',
    themeBackground: 'theme_background_color_pink',
    options: [
      'priceSection.cards.maxi.options.optionsItem_1',
      'priceSection.cards.maxi.options.optionsItem_2',
      'priceSection.cards.maxi.options.optionsItem_3',
      'priceSection.cards.maxi.options.optionsItem_4',
      'priceSection.cards.maxi.options.optionsItem_5',
      'priceSection.cards.maxi.options.optionsItem_6',
    ],
    btnOptionsTitle: 'priceSection.btnOptionsTitle',
    btnOptions: [
      'priceSection.btnOptions.btnOptions_1',
      'priceSection.btnOptions.btnOptions_2',
      'priceSection.btnOptions.btnOptions_3',
    ],
    btn: 'priceSection.btnName'
  },
];

const Price = () => {
  const [items,] = useState(initialState);
  return (
      <section className={classes.price}>
          <div className={classes.price__container}>
              <h2 className={`${classes.price__title} _h2_title _scrollTo`} id="price__title">
                  <Trans i18nKey="priceSection.sectionTitle" />
              </h2>
              <div className={classes.price__box}>
                  <ul className={`classes.price__items ${classes.item_box}`}>
                      {items.map((item) => (
                          <PriceItem
                            key={item.cost}
                            name={item.name}
                            cost={item.cost}
                            moneySymbol={item.moneySymbol}
                            valueOfLocations={item.valueOfLocations}
                            options={item.options}
                            backgroundClassName={item.themeBackground}
                            btn={item.btn}
                            btnOptions={item.btnOptions}
                            btnOptionsTitle={item.btnOptionsTitle}
                          />
                      ))}
                  </ul>
              </div>
          </div>
      </section>
  );
};

export default Price;
