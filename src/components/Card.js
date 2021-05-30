import React from 'react';
import CardItem from './CardItem';
import './Card.css';

function Card() {
    return (
        <div className='cards'>
            <h1>Check Out This Epic Destination!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Explore The Hidden Waterfall Deep Inside Amazon Jungle'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-2.jpg'
                        text='Travel trough the Island of Bali in a Private Cruise'
                        label='Adventure'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-3.jpg'
                        text='Set Sail in the Atlantic Ocean Visiting Uncharted Waters'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-4.jpg'
                        text='Experience Football on Top of the Himalayan Mountains'
                        label='Adventure'
                        path='/products'
                        />
                        <CardItem 
                        src='images/img-8.jpg'
                        text='Ride Through the Sahara Desert on a Guided Camel Tour'
                        label='Adventure'
                        path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card
