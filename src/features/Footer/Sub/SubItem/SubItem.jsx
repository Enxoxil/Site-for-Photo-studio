import React, {Component} from 'react';
import  classes from './SubItem.module.scss'
class SubItem extends Component {
    render() {
        const {link, name, icon} = this.props;
        return (
            <a href={link} className={`${name} ${icon} ${classes._sub_icon}`}/>
        );
    }
}

export default SubItem;