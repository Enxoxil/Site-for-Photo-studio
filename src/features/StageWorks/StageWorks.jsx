import React, {Component} from 'react';
import classes from "./StageWorks.module.scss";

class StageWorks extends Component {
    render() {
        return (
            <section className={classes.stageWorks}>
                <div className={classes.stageWorks__container}>
                    <h2 className={`${classes.stageWorks__title} _h2_title`}>Этапы работ</h2>
                    <div className={classes.stageWorks__body}>
                        <div className={classes.stageWorks__body_container}>
                            <div className={`${classes.stageWorks__item} ${classes.item_content}`}>
                                <div className={classes.item_content__wrapper}>
                                    <h6 className={classes.item_content__title}>Заявка</h6>
                                    <p className={classes.item_content__text}>
                                        Съешь еще этих мягких французских булок, да выпей чаю.
                                        Съешь еще этих мягких.
                                    </p>
                                    <p className={classes.item_content__number}>1</p>
                                </div>
                            </div>
                            <div className={`${classes.stageWorks__item} ${classes.item_content}`}>
                                <div className={classes.item_content__wrapper}>
                                    <h6 className={classes.item_content__title}>Бронь</h6>
                                    <p className={classes.item_content__text}>
                                        Съешь еще этих мягких французских булок, да выпей чаю.
                                        Съешь еще этих мягких.
                                    </p>
                                    <p className={classes.item_content__number}>2</p>
                                </div>
                            </div>
                            <div className={`${classes.stageWorks__item} ${classes.item_content}`}>
                                <div className={classes.item_content__wrapper}>
                                    <h6 className={classes.item_content__title}>
                                        Составление
                                        <br/>
                                        Технического задания
                                    </h6>
                                    <p className={classes.item_content__text}>
                                        Съешь еще этих мягких французских булок, да выпей чаю.
                                        Съешь еще этих мягких.
                                    </p>
                                    <p className={classes.item_content__number}>3</p>
                                </div>
                            </div>
                            <div className={`${classes.stageWorks__item} ${classes.item_content}`}>
                                <div className={classes.item_content__wrapper}>
                                    <h6 className={classes.item_content__title}>Съёмка</h6>
                                    <p className={classes.item_content__text}>
                                        Съешь еще этих мягких французских булок, да выпей чаю.
                                        Съешь еще этих мягких.
                                    </p>
                                    <p className={classes.item_content__number}>4</p>
                                </div>
                            </div>
                            <div className={`${classes.stageWorks__item} ${classes.item_content}`}>
                                <div className={classes.item_content__wrapper}>
                                    <h6 className={classes.item_content__title}>Готовые фото</h6>
                                    <p className={classes.item_content__text}>
                                        Съешь еще этих мягких французских булок, да выпей чаю.
                                        Съешь еще этих мягких.
                                    </p>
                                    <p className={classes.item_content__number}>5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default StageWorks;