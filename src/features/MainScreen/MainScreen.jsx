import React from 'react';
import { Trans } from 'react-i18next';
import classes from './MainScreen.module.scss';
import Button from '../../ui/components/Button/Button';

// import video
import videoBackground from '../../assets/video/bg_video.mp4';
import Video from '../../ui/components/Video/Video';

const MainScreen = ({ toggleShowPopup }) => {
  return (
      <section className={`${classes.main_screen} _scrollTo`} id="mainScreen">
          <div className={classes.main_screen__inner}>

              <Video autoPlay muted loop className={classes.main_screen__video} id="main-screen__video">
                  <source src={videoBackground} type="video/mp4" />
              </Video>

              <div className={`${classes.main_screen__container} _container`}>
                  <div className={`main_screen__wrapper ${classes.main_content}`}>
                      <h2 className={classes.main_content__title}>
                          <Trans i18nKey="mainContentSection.h1" />
                      </h2>
                      <p className={classes.main_content__sub_title}>
                          <Trans i18nKey="mainContentSection.sectionTitle" />
                      </p>
                      <p className={classes.main_content__text}>
                          <Trans i18nKey="mainContentSection.content" />
                      </p>
                      <Button className={`${classes.main_content__button}`} onClick={toggleShowPopup}>
                          <Trans i18nKey="mainContentSection.mainBtn" />
                      </Button>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default MainScreen;
