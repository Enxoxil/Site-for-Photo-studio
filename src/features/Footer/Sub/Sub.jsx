import React, {Component} from 'react';
import classes from './Sub.module.scss'
import SubItem from "./SubItem/SubItem";

const initial_value = {sub: [
        {
            link: 'https://www.instagram.com',
            icon: '_icon_insta',
            name: 'sub__inst'
        },
        {
            link: 'https://facebook.com',
            icon: '_icon_facebook',
            name: 'sub__facebook'
        },
        {
            link: 'https://twitter.com',
            icon: '_icon_twitter',
            name: 'sub__twitter'
        },
        {
            link: 'https://web.telegram.org',
            icon: '_icon_telegram',
            name: 'sub__telegramm'
        },

    ]
}

class Sub extends Component {

    constructor(props) {
        super(props);
        this.state = initial_value;
    }

    render() {
        return (
            <div className={classes.sub}>
                <div className={classes.sub__wrapper}>
                    <div className={classes.sub__text}>
                        <p className={classes.sub__text_content}>Наши социальные сети:</p>
                    </div>
                    {this.state.sub.map(item => <SubItem key={item.link} name={item.name} link={item.link} icon={item.icon}/>)}
                </div>
            </div>
        );
    }
}

export default Sub;