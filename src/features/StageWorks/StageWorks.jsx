import React, {useState} from 'react';
import classes from "./StageWorks.module.scss";
import CardItem from "./CardItem/CardItem";

const initialState = [
        {
            title: 'Заявка',
            text: 'Съешь еще этих мягких французских булок, да выпей чаю.\n Съешь еще этих мягких.',
            number: '1'
        },
        {
            title: 'Бронь',
            text: 'Съешь еще этих мягких французских булок, да выпей чаю.\n Съешь еще этих мягких.',
            number: '2'
        },
        {
            title: 'Составление\n Технического задания',
            text: 'Съешь еще этих мягких французских булок, да выпей чаю.\n Съешь еще этих мягких.',
            number: '3'
        },
        {
            title: 'Съёмка',
            text: 'Съешь еще этих мягких французских булок, да выпей чаю.\n Съешь еще этих мягких.',
            number: '4'
        },
        {
            title: 'Готовые фото',
            text: 'Съешь еще этих мягких французских булок, да выпей чаю.\n Съешь еще этих мягких.',
            number: '5'
        },
    ]


const StageWorks = () => {
    const [cards, ] = useState(initialState);

    return (
        <section className={classes.stageWorks}>
            <div className={classes.stageWorks__container}>
                <h2 className={`${classes.stageWorks__title} _h2_title`}>Этапы работ</h2>
                <div className={classes.stageWorks__body}>
                    <ul className={classes.stageWorks__body_container}>
                        {cards.map(item =>
                            <CardItem
                                title={item.title}
                                text={item.text}
                                number={item.number}
                                key={item.number + item.text}
                            />)}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default StageWorks;