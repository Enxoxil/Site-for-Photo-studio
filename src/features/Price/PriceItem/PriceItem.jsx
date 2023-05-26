import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import classes from './PriceItem.module.scss';
import Card from '../../../ui/components/Card/Card';
import Button from '../../../ui/components/Button/Button';

const PriceItem = (props) => {
  const {
    backgroundClassName,
    name,
    moneySymbol,
    cost,
    valueOfLocations,
    options,
    btn,
    btnOptions,
    btnOptionsTitle
  } = props;
  const { t } = useTranslation();
  return (
      <div className={classes.item_box__container}>
          <Card className={`${classes.item_box__wrapper} ${backgroundClassName}`}>
              <div className={classes.item_box__header}>
                  <p className={classes.item_box__name}>{t(name)}</p>
                  <p className={classes.item_box__cost}>
                      <span data-cost="">{cost}</span>
                      <span className={classes._cost_value}>{moneySymbol}</span>
                  </p>
                  <p className={classes.item_box__value}>{t(valueOfLocations)}</p>
              </div>
              <ul className={classes.item_box__body}>
                  {options.map((item) => (

                      <Card
                        key={item}
                        className={`${classes.item_box__body_item} _icon_list_style_image`}
                      >
                          {t(item)}
                      </Card>
                  ))}
              </ul>
              <div className={`classes.item_box__footer ${classes.box_footer}`}>
                  <h5 className={classes.box_footer__title}>{t(btnOptionsTitle)}</h5>
                  <div className={classes.box_footer__box}>
                      {btnOptions.map((item) => (
                          <div className={classes.box_footer__item} key={item}>
                              <Button className={classes.box_footer__button}>
                                  <Trans i18nKey={item} />
                              </Button>
                          </div>
                      ))}
                  </div>
              </div>
            
              <div className={classes.item_box__button_container}>
                  <Button className={`${classes.item_box__button} _button`}>
                      {t(btn)}
                  </Button>
              </div>
          </Card>
      </div>
  );
};
export default PriceItem;
