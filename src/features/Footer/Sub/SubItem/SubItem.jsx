import React, {Component} from 'react';
import  classes from './SubItem.module.scss'
class SubItem extends Component {
    render() {
        return (
            <a href={this.props.link} className={`${this.props.name} ${this.props.icon} ${classes._sub_icon}`}></a>
        );
    }
}

export default SubItem;