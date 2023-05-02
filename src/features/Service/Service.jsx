import React from 'react';
import classes from './Service.module.scss';
import Card from '../../ui/components/Card/Card';
import Image from '../../ui/components/Image/Image';
import { sort } from '../../Helpers/Sort';

const Service = (props) => {
  const {
    cards,
    dropHandler,
    dragOverHandler,
    dragEndHandler,
    dragLeaveHandler,
    dragStartHandler,
  } = props;
  return (
      <section className={classes.service}>
          <div className={classes.service__container}>
              <div className={classes.service__wrapper}>
                  <h2
                    className={`${classes.service__title} _h2_title _scrollTo`}
                    id="service__title"
                  >
                      Виды услуг
                  </h2>
                  <ul className={classes.service__content_box}>
                      {cards.sort(sort)
                        .map((item) => (
                            <Card
                              key={item.name}
                              className={classes.service__content_item}
                              draggable
                              onDragStart={(e) => dragStartHandler(e, item)}
                              onDragLeave={(e) => dragLeaveHandler(e)}
                              onDragEnd={(e) => dragEndHandler(e)}
                              onDragOver={(e) => dragOverHandler(e)}
                              onDrop={(e) => dropHandler(e, item)}
                            >
                                <Image
                                  src={item.img}
                                  alt={item.name}
                                  className={classes.service__content_img}
                                />
                                <p className={classes.service__content_text}>{item.name}</p>
                            </Card>
                        ))}
                  </ul>
              </div>
          </div>
      </section>
  );
};

export default Service;
