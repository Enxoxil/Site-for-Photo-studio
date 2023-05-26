import React, { useState } from 'react';

// import images
import serviceImg1 from '../../assets/img/service-img1.png';
import serviceImg2 from '../../assets/img/service-img2.png';
import serviceImg3 from '../../assets/img/service-img3.png';
import serviceImg4 from '../../assets/img/service-img4.png';
import serviceImg5 from '../../assets/img/service-img5.png';
import serviceImg6 from '../../assets/img/service-img6.png';
import serviceImg7 from '../../assets/img/service-img7.png';
import serviceImg8 from '../../assets/img/service-img8.png';
import serviceImg9 from '../../assets/img/service-img9.png';
import serviceImg10 from '../../assets/img/service-img10.png';
import serviceImg11 from '../../assets/img/service-img11.png';
import Service from './Service';

const initialState = [
  { id: 1, name: 'servicesSection.cardsTitle.id_1', img: serviceImg1 },
  { id: 2, name: 'servicesSection.cardsTitle.id_2', img: serviceImg2 },
  { id: 3, name: 'servicesSection.cardsTitle.id_3', img: serviceImg3 },
  { id: 4, name: 'servicesSection.cardsTitle.id_4', img: serviceImg4 },
  { id: 5, name: 'servicesSection.cardsTitle.id_5', img: serviceImg5 },
  { id: 6, name: 'servicesSection.cardsTitle.id_6', img: serviceImg6 },
  { id: 7, name: 'servicesSection.cardsTitle.id_7', img: serviceImg7 },
  { id: 8, name: 'servicesSection.cardsTitle.id_8', img: serviceImg8 },
  { id: 9, name: 'servicesSection.cardsTitle.id_9', img: serviceImg9 },
  { id: 10, name: 'servicesSection.cardsTitle.id_10', img: serviceImg10 },
  { id: 11, name: 'servicesSection.cardsTitle.id_11', img: serviceImg11 },
];
const ServiceContainer = () => {
  const [cards, setCards] = useState(initialState);
  const [currentCardId, setCurrentCardId] = useState('');

  const dropHandler = (e, card) => {
    e.preventDefault();
    setCards(
      cards.map((item) => {
        if (item.id === card.id) {
          return { ...item, id: currentCardId };
        }
        if (item.id === currentCardId) {
          return { ...item, id: card.id };
        }
        return item;
      })
    );
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    // TODO create visual effect
  };

  const dragEndHandler = (e) => {
    e.preventDefault();
    // TODO create visual effect
  };

  const dragLeaveHandler = () => {
    // TODO create visual effect
  };

  const dragStartHandler = (e, card) => {
    setCurrentCardId(card.id);
  };

  return (
      <Service
        cards={cards}
        dropHandler={dropHandler}
        dragOverHandler={dragOverHandler}
        dragEndHandler={dragEndHandler}
        dragLeaveHandler={dragLeaveHandler}
        dragStartHandler={dragStartHandler}
      />
  );
};

export default ServiceContainer;
