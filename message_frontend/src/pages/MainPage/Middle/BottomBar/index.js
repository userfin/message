import React from 'react';
import { Button } from '../../../../components/Button';
import styles from './BottomBar.module.scss';

export const BottomBar = () => {
  return (
    <div className=' px-4 pb-4 d-flex'>
      <div className={`d-flex flex-grow-1 align-center ${styles.botInput}`}>
        <div className='d-flex align-center'>
          <Button className='px-1'>
            <img 
              className='m-auto' 
              width='25px' 
              height='25px' 
              src='/assets/add_file.svg' alt='Choose file'
            />  
          </Button>
          <Button className='px-1'>
            <img 
              className='m-auto' 
              width='25px' 
              height='25px' 
              src='/assets/add_emoji.svg' alt='Choose emoji'
            />
          </Button>
          <Button className='px-1'>
            <img 
              className='m-auto' 
              width='25px' 
              height='25px' 
              src='/assets/add_voice.svg' 
              alt='Record voice' 
            />
          </Button>
        </div>
        <input 
          className={`flex-grow-1 ${styles.botInput}`} 
          placeholder='Your message here...'
        />
      </div>
      <div className={`ms-3 ${styles.topButton}`}>
        <Button className={'p-2'} style={{
          backgroundColor: '#497174',
          color: '#fff',
        }}>
          Send
          <img className='ms-1' 
            width='20px' 
            height='20px' 
            src='/assets/send.svg' 
            alt='Notifications'/>
        </Button>
      </div>
    </div>
  );
};
