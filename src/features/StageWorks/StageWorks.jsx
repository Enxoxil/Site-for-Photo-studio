import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import classes from './StageWorks.module.scss';
import CardItem from './CardItem/CardItem';

const initialState = [
  {
    title: 'stageWorksSection.cards.number_1.title',
    text: 'stageWorksSection.cards.number_1.content',
    number: '1'
  },
  {
    title: 'stageWorksSection.cards.number_2.title',
    text: 'stageWorksSection.cards.number_2.content',
    number: '2'
  },
  {
    title: 'stageWorksSection.cards.number_3.title',
    text: 'stageWorksSection.cards.number_3.content',
    number: '3'
  },
  {
    title: 'stageWorksSection.cards.number_4.title',
    text: 'stageWorksSection.cards.number_4.content',
    number: '4'
  },
  {
    title: 'stageWorksSection.cards.number_5.title',
    text: 'stageWorksSection.cards.number_5.content',
    number: '5'
  },
];

const StageWorks = () => {
  const [cards,] = useState(initialState);
  const { t } = useTranslation();
  return (
      <section className={classes.stageWorks}>
          <div className={classes.stageWorks__container}>
              <h2 className={`${classes.stageWorks__title} _h2_title`}>
                  <Trans i18nKey="stageWorksSection.sectionTitle" />
              </h2>
              <div className={classes.stageWorks__body}>
                  <ul className={classes.stageWorks__body_container}>
                      {cards.map((item) => (
                          <CardItem
                            title={t(item.title)}
                            text={t(item.text)}
                            number={item.number}
                            key={item.text}
                          />
                      ))}
                  </ul>
              </div>
          </div>
      </section>
  );
};

export default StageWorks;
