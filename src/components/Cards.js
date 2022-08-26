import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Services...!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/gim1.jpg'
              
              text='Drive with pride in a clear car.'
              label='Quick wash'
              path='/signup'
            />
            <CardItem
              src='images/frontwash.jpg'
              text='Always expect fast and efficient service.'
             
              label='Our Awesome Workers'
              path='/signup'
            />
             <CardItem
              src='images/wash.jpg'
              text='Cleaning Waterless Wash.'
              label='Drivethru'
              path='/signup'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              
              src='images/bodyclean.jpg'
              text='Always expect fast and efficient service.'
             
              label='Amazing Customer Service'
              path='/signup'
            />
            <CardItem
              src='images/gear.jpg'
             
              text='Explore the fabulous wash'
              label='Fast And Accurate Services'
              path='/signup'
            />
            <CardItem
              src='images/car.jpg'
             
              text='Beyond clean and more than just shine!'
              label='Waxing'
              path='/signup'
            />
          </ul>
        </div>
        <div>
          <h1  className='about' id='about' >ABOUT US</h1><br></br>
          <p>Green car Wash is unique in that we are a “Flex” service car wash. What that means to you is that we are the only car wash you will ever need. At Green Wash, our approach combines the latest car wash technology with the human touch to provide the best car wash experience possible.
            We believe in making customer satisfaction a top priority. We are vehicle owners just like you and we understand that it can be a stressful experience to trust your vehicle with someone else. At Green Wash, you can rest assured that we will treat your vehicle as if it was our own. We wash one vehicle at a time, so we can make sure each vehicle receives the best treatment possible.</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
