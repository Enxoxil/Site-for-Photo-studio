import React, {Component, useState} from 'react';

//import images
import service_img1 from '../../assets/img/service-img1.png'
import service_img2 from '../../assets/img/service-img2.png'
import service_img3 from '../../assets/img/service-img3.png'
import service_img4 from '../../assets/img/service-img4.png'
import service_img5 from '../../assets/img/service-img5.png'
import service_img6 from '../../assets/img/service-img6.png'
import service_img7 from '../../assets/img/service-img7.png'
import service_img8 from '../../assets/img/service-img8.png'
import service_img9 from '../../assets/img/service-img9.png'
import service_img10 from '../../assets/img/service-img10.png'
import service_img11 from '../../assets/img/service-img11.png'
import Service from "./Service";

const initialState = [
    {id: 1, name: 'Фотосессия Лав Стори', img: service_img1},
    {id: 2, name: 'Фотосессия для подростков', img: service_img2},
    {id: 3, name: 'Парная фотосессия', img: service_img3},
    {id: 4, name: 'Фотосессия для парней', img: service_img4},
    {id: 5, name: 'Семейная фотосессия (дети +14)', img: service_img5},
    {id: 6, name: 'Групповая фотосессия', img: service_img6},
    {id: 7, name: 'Фотосессия Лук Бук', img: service_img7},
    {id: 8, name: 'Фотосессия для девушек', img: service_img8},
    {id: 9, name: 'Фотосессия для беременных', img: service_img9},
    {id: 10, name: 'Фотосессия с животными', img: service_img10},
    {id: 11, name: 'Фотосессия "Деловой стиль"', img: service_img11},
]
const ServiceContainer = () => {
    const [cards, setCards] = useState(initialState);
    const [currentCardId, setCurrentCardId] = useState('');


    const dropHandler = (e, card) => {
        e.preventDefault();
        setCards(
            cards.map(item => {
                if (item.id === card.id) {
                    return {...item, id: currentCardId};

                }
                if (item.id === currentCardId) {
                    return {...item, id: card.id}
                }
                return item;
            })
        )
    }

    const dragOverHandler = (e) => {
        e.preventDefault()
        //TODO create visual effect

    }

    const dragEndHandler = (e) => {
        e.preventDefault();
        //TODO create visual effect

    }

    const dragLeaveHandler = (e) => {
        //TODO create visual effect
    }

    const dragStartHandler = (e, card) => {
        setCurrentCardId(card.id)

    }

    return (
        <Service cards={cards}
                 dropHandler={dropHandler}
                 dragOverHandler={dragOverHandler}
                 dragEndHandler={dragEndHandler}
                 dragLeaveHandler={dragLeaveHandler}
                 dragStartHandler={dragStartHandler}
        />
    )
}

export default ServiceContainer;