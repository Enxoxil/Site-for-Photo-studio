import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import classes from './Sub.module.scss';
import SubItem from './SubItem/SubItem';
import {
  INSTAGRAM_LINK,
  FACEBOOK_LINK,
  TWITTER_LINK,
  TELEGRAM_LINK
} from '../../../const/const';
import {
  INSTAGRAM_ICON,
  FACEBOOK_ICON,
  TWITTER_ICON,
  TELEGRAM_ICON
} from '../../../ui/icons/icons';

const initialValue = [
  {
    link: INSTAGRAM_LINK,
    icon: INSTAGRAM_ICON
  },
  {
    link: FACEBOOK_LINK,
    icon: FACEBOOK_ICON
  },
  {
    link: TWITTER_LINK,
    icon: TWITTER_ICON
  },
  {
    link: TELEGRAM_LINK,
    icon: TELEGRAM_ICON
  },
];

const Sub = () => {
  const [sub] = useState(initialValue);

  return (
      <div className={classes.sub}>
          <div className={classes.sub__wrapper}>
              <div className={classes.sub__text}>
                  <p className="sub__text_content">
                      <Trans i18nKey="footerSection.footerText" />
                  </p>
              </div>
              {sub.map((item) => <SubItem key={item.link} name={item.name} link={item.link} icon={item.icon} />)}
          </div>
      </div>
  );
};

export default Sub;
