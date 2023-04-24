import React from 'react';
import classes from './SubItem.module.scss'

const SubItem = props => {
    const {link, name, icon} = props;
    return (
        <a href={link} className={`${name} ${icon} ${classes._sub_icon}`}/>
    );
};

export default SubItem;