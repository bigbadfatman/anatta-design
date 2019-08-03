import React from 'react';
import './rating.scss';

const Rating = ({rating, max, reviews}) => (
  <div className='rating-wrapper'>
    <div className='rating'>
      {
        [...Array(max)].map((star, index) => (
          <React.Fragment key={index}>
            {index > rating ? <>&#9734;</> : <>&#9733;</>}
          </React.Fragment>
        ))
      }
      <p className='reviews-count'>
      &nbsp;&nbsp;{reviews} Reviews
      </p>
    </div>
  </div>
)

export default Rating;
