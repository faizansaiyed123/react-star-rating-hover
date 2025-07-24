import React, { useState } from 'react';


const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = Array(5).fill(0);

  return (
    <div className="rating-container">
      <div className="stars-wrapper">
        {stars.map((_, index) => {
          const current = index + 1;
          return (
            <span
              key={index}
              className={`star ${current <= (hover || rating) ? 'colored' : 'unColor'}`}
              onClick={() => setRating(current)}
              onMouseEnter={() => setHover(current)}
              onMouseLeave={() => setHover(0)}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      <p className="rating-text">Rating: {rating} / 5</p>
    </div>
  );
};

export default Rating;
