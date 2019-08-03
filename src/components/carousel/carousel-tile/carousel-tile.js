import React from 'react';
import './carousel-tile.scss'
import { Link } from 'react-router-dom';

const CarouselTile = ({item}) => {
  const tileContent = <>
    <img src={item.image_url} className='carousel-image' alt={item.name}/>
      {
        item.tag && <div className='tag'>{item.tag}</div>
      }
    <div className='details'>
      <p className='name'>
        {item.name}
      </p>
      <p className='price'>
        ${item.price}
      </p>
    </div>
  </>
  return (
    !item.url
    ? (
      <div className='carousel-tile-wrapper'>
        {tileContent}
      </div>
    ) : (
      <Link to={item.url} className='carousel-tile-wrapper'>
        {tileContent}
      </Link>  
    )
  );
};

export default CarouselTile;
