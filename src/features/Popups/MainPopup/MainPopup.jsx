import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import classes from './MainPopup.module.scss';

import modalFeedback from '../../../assets/img/modal-feedback.webp';
import Form from '../../../ui/components/Form/Form';
import Input from '../../../ui/components/Input/Input';
import Button from '../../../ui/components/Button/Button';
import Image from '../../../ui/components/Image/Image';

const MainPopup = ({
  toggleShowPopup,
  formHandler
}) => {
  const { t } = useTranslation();
  return (
      <section className={`${classes.feedback} _modal`}>
          <div className={classes.feedback__container}>
              <div className={`${classes.feedback__wrapper} _modalNoCloseField`}>
                  <div className={classes.feedback__body}>
                      <div className={classes.feedback__img_container}>
                          <Image src={modalFeedback} alt="modal feedback" className={classes.feedback__img} />
                      </div>

                      <div className={`${classes.feedback__form} ${classes.form}`}>
                          <Form
                            formHandler={formHandler}
                            className="classes.form__body _form _formFeedback"
                          >
                              <div className={classes.form__wrapper}>
                                  <h3 className={classes.form__title}>
                                      <Trans i18nKey="popupCallback.title" />
                                  </h3>
                                  <ul className={classes.form__box}>
                                      <li className={classes.form__item}>
                                          <Input
                                            id="feedback-name"
                                            type="text"
                                            placeholder={t('popupCallback.nameField')}
                                            name="name"
                                            required
                                            autoFocus
                                            label={t('popupCallback.nameLabel')}
                                          />
                                      </li>
                                      <li className={classes.form__item}>
                                          <Input
                                            id="feedback-email"
                                            type="email"
                                            placeholder={t('popupCallback.emailField')}
                                            name="email"
                                            required
                                            label={t('popupCallback.emailLabel')}
                                          />
                                      </li>
                                      <li className={classes.form__item}>
                                          <Input
                                            id="feedback-phone"
                                            type="tel"
                                            placeholder={t('popupCallback.telField')}
                                            name="tel"
                                            required
                                            label={t('popupCallback.telLabel')}
                                            minLength="10"
                                            maxLength="10"
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
                      <button
                        className={`${classes.feedback__btn} _closeModalBtn`}
                        type="button"
                        tabIndex="0"
                        onClick={toggleShowPopup}
                      >
                          <span />
                      </button>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default MainPopup;
