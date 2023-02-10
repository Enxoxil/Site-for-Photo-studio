import React, {Component} from 'react';
import classes from './DesignStudio.module.scss'

class DesignStudio extends Component {
    render() {
        return (
            <section className={classes.designStudio}>
                <div className={classes.designStudio__container}>
                    <h2 className={`${classes.designStudio__title} _h2_title _scrollTo`} id="designStudio__title">Оформление
                        фотостудии</h2>
                    <div className={classes.designStudio__content}>
                        <video autoPlay muted loop className={classes.designStudio__content_video} id="designStudio__video">
                            <source src="/video/bg_video.mp4" type="video/mp4"/>
                        </video>
                        <button className={classes.designStudio__content_btn}></button>
                    </div>
                </div>
            </section>
        );
    }
}

export default DesignStudio;