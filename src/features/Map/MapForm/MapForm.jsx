import React from 'react';
import { useDispatch } from 'react-redux';
import { Trans, useTranslation } from 'react-i18next';
import classes from './MapForm.module.scss';
import Input from '../../../ui/components/Input/Input';
import Button from '../../../ui/components/Button/Button';
import Form from '../../../ui/components/Form/Form';
import { sendClient } from '../../../BLL/reducers/form/form.reducer';

const MapForm = () => {
  const dispatch = useDispatch();
  const formHandler = (data) => {
    dispatch(sendClient(data));
    console.log('Thank you! Your data was send to Firebase :', data);
  };
  const { t } = useTranslation();
  return (
      <div className={`map__form ${classes.form} theme_background_color_blue`}>
          <Form formHandler={formHandler} className={`${classes.form__body} _form`}>
              <div className={classes.form__wrapper}>
                  <h3 className={classes.form__title}>
                      <Trans i18nKey="popupCallback.title" />
                  </h3>
                  <ul className={classes.form__box}>
                      <li className={classes.form__item}>
                          <Input
                            id="map-name"
                            type="text"
                            placeholder={t('popupCallback.nameField')}
                            name="name"
                            required
                            label={t('popupCallback.nameLabel')}
                          />
                      </li>
                      <li className={classes.form__item}>
                          <Input
                            id="map-email"
                            type="email"
                            placeholder={t('popupCallback.emailField')}
                            name="email"
                            required
                            label={t('popupCallback.emailLabel')}
                          />
                      </li>
                      <li className={classes.form__item}>
                          <Input
                            id="map-phone"
                            type="tel"
                            placeholder={t('popupCallback.telField')}
                            name="tel"
                            required
                            label={t('popupCallback.telLabel')}
                          />
                      </li>
                      <li className={classes.form__button_container}>
                          <Button className={`${classes.form__button} _button`} type="submit">
                              <Trans i18nKey="popupCallback.nameBtn" />
                          </Button>
                      </li>
                  </ul>
                  <p className={classes.form__text}>
                      <Trans i18nKey="popupCallback.policyText" />
                      <a href="#" className={classes.form__text_policy}>
                          <Trans i18nKey="popupCallback.policy" />
                      </a>
                  </p>
              </div>
          </Form>
      </div>
  );
};

export default MapForm;
