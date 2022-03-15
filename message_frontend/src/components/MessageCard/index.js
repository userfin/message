import React from 'react';
import RoundImage from '../RoundImage';
import { Button } from '../Button';
import styles from './MessageCard.module.scss';

export const MessageCard = ({
  time, img, text, name, unread
}) => {
  return (
    <Button className={`d-flex p-3 m-auto ${styles.card}`} style={{maxWidth: '300px'}}>
      <div className="flex-grow-0 flex-shrink-1">
        <RoundImage size='sm' src={img}/>
      </div>
      <div 
        className="flex-grow-1 flex-shrink-1 px-3"  
        style={{minWidth: 0}}>
        <h6>{name}</h6>
        <p>{text}</p> 
      </div>
      <div className="flex-grow-0 flex-shrink-1">
        <p>{time}</p>
        <div>{unread}</div>
      </div>
    </Button>
  );
};
