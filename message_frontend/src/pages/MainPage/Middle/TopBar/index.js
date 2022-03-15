import React from 'react';
import RoundImage from '../../../../components/RoundImage';
import { Button } from '../../../../components/Button';
import styles from './TopBar.module.scss';

export default function TopBar({
  img, name, status 
}) {
  return (
    <div className='d-flex justify-content-between pt-4 px-4' 
      style={{
        minWidth: '0px',
        alignItems: 'center'
      }}>

      <div>
        <RoundImage src={img} size='md' isOnline/>
      </div>
      <div className='ps-3'>
        <h3 className='topName m-0'>{name}</h3>
        <p  className='m-0'>{status}</p>
      </div>
      <div className='flex-grow-1 px-4'>
        <input className={`flex-grow-1 w-100 ${styles.topSearch}`} placeholder='Search'/>
      </div>
      <div className={`me-2 ${styles.topButton}`}>
        <Button>
          <img width='30px' height='30px' src='/assets/bell.svg' alt='Notifications'/>
        </Button>
      </div>
      <div className={`me-2 ${styles.topButton}`}>
        <Button onClick={()=>console.log('3 cyca po cene 1')}>
          <img width='30px' height='30px' src='/assets/dots.svg' alt='More'/>
        </Button>
      </div>
    </div>
  );
}
