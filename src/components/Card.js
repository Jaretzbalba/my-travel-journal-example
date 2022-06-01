import React from 'react';

export default function Card(props) {
  return (
    <div className='card'>
      <img src={props.imageUrl} className='card--image' />
      <div className='card--info'>
        <div className='card--map'>
          <img src='../images/pin.png' className='card--pin' />
          <span className='card--location'>{props.location}</span>
          <a href={props.googleMapsUrl} className='gray'>
            View on Google Maps
          </a>
        </div>
        <p className='card--title'>{props.title}</p>
        <p className='card--date'>
          {props.startDate} - {props.endDate}
        </p>
        <p className='card--description'>{props.description}</p>
      </div>
    </div>
  );
}
