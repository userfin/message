import React from 'react';

export const Divider = ({
  maxWidth
}) => {
  return (
    <div className='my-3 m-auto' style={{
      borderBottom: '1.5px solid #919CAA',
      width: '90%',
      opacity: '0.3',
      maxWidth: maxWidth,
    }}/>
  );
};