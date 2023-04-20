import React, {Component} from 'react';
import classes from './Backdrop.module.scss';

class Backdrop extends Component {
    render() {
        const {toggleShowPopup} = this.props;
        return (
            <div onClick={toggleShowPopup} className={classes.backdrop}/>
        );
    }
}

export default Backdrop;