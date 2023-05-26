import React from 'react';
import { Trans } from 'react-i18next';
import classes from './DesignStudio.module.scss';
import Video from '../../ui/components/Video/Video';

// import video
import videoBackground from '../../assets/video/bg_video.mp4';
import Button from '../../ui/components/Button/Button';

const DesignStudio = () => (
    <section className={classes.designStudio}>
        <div className={classes.designStudio__container}>
            <h2 className={`${classes.designStudio__title} _h2_title _scrollTo`} id="designStudio__title">
                <Trans i18nKey="designStudioSection.sectionTitle" />
            </h2>
            <div className={classes.designStudio__content}>
                <Video autoPlay muted loop className={classes.designStudio__content_video} id="designStudio__video">
                    <source src={videoBackground} type="video/mp4" />
                </Video>
                <Button className={classes.designStudio__content_btn} />
            </div>
        </div>
    </section>
);

export default DesignStudio;
