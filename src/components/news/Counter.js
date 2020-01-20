import React from 'react';

const Counter = ({ count = 0, singular, plural }) => {
  return (
    <span>
      {count > 1 ? `${count} ${plural}` : `${count} ${singular}`}
    </span>
  );
};

export default Counter;
