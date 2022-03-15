import React from 'react';
import { Button } from '../Button';

export const FileCard = ({
  name, date, size, src
}) => {
  return (
    <Button className='d-flex p-3 m-auto' 
      style={{
        maxWidth: '300px',
        maxHeight: '70px',
        alignItems:'center'
      }}
    >
      <div className="flex-grow-0 flex-shrink-1">
        <div 
          style={{
            backgroundColor: '#D6E4E5',
            borderRadius: '7px'
          }}>
          <img className='m-auto p-2' src='/assets/file_icon.svg' alt='File'/>
        </div>
      </div>
      <div 
        className="flex-grow-1 flex-shrink-1 px-3"  
        style={{minWidth: 0}}>
        <h6 className='m-0'>{name}</h6>
        <p className='m-0'>{date}</p>
      </div>
      <div className="flex-grow-0 flex-shrink-1">
        <h6>{size}</h6>
      </div>
    </Button>
  );
};
