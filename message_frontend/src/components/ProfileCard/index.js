import React from 'react';
import RoundImage from '../RoundImage';
import styles from './ProfileCard.module.scss';

export const ProfileCard = ({
  img, isOnline, name, userTag
}) => {
  return (
    <div className='d-flex align-items-center flex-column w-100'>
      <RoundImage size="lg" src={img} isOnline={isOnline}/>
      <h2 className={`m-0 mt-2 mb-1 w-100 text-center ${styles.textWrap}`}>{name}</h2>
      <p className={`m-0 w-100 text-center ${styles.textWrap}`}>{userTag}</p>
    </div>
  );
}; 
