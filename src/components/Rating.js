import React, { useState } from 'react';

const Rating = (props) => {
  const [rated, setRated] = useState(2);
  const limit = props.limit || 10;
  const handleClick = (e) => {
    setRated(e.target.getAttribute('data'));
  };
  return (
    <div onClick={handleClick}>
      {[...new Array(limit).keys()].map((i) => (
        <span
          key={i}
          data={i + 1}
          className={i < rated ? 'rated star' : 'star'}
        ></span>
      ))}
    </div>
  );
};

export default Rating;
