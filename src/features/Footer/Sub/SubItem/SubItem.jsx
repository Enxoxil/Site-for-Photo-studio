import React from 'react';
import classes from './SubItem.module.scss';

const SubItem = (props) => {
  const { link, icon } = props;

  return <a href={link} className={`${icon.name} ${icon.icon} ${classes._sub_icon}`} />;
};

export default SubItem;
