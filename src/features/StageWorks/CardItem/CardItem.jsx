import React, {Component} from 'react';
import classes from "../StageWorks.module.scss";
import Card from "../../../ui/components/Card/Card";

class CardItem extends Component {
    render() {
        const {title, text, number} = this.props;
        return (
            <Card className={`${classes.stageWorks__item} ${classes.item_content}`}>
                <div className={classes.item_content__wrapper}>
                    <h6 className={classes.item_content__title}>{title}</h6>
                    <p className={classes.item_content__text}>
                        {text}
                    </p>
                    <p className={classes.item_content__number}>{number}</p>
                </div>
            </Card>
        );
    }
}

export default CardItem;