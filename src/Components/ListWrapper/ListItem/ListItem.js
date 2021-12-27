import React from 'react';
import './ListItem.css';
import DanAbramovImage from '../../../assets/images/danabramov.jpg';

const ListItem = () => (
    <li className='listItem__wrapper'>
        <img src={DanAbramovImage} className='listItem__image'/>
        <div>
            <h2 className='listItem__name'>Dan Abramov</h2>
            <p className='listItem__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ut sunt culpa, Voluptatem!</p>
            <button className='listItem__button'>visit twitter page</button>
        </div>
    </li>
);


export default ListItem;
