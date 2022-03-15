import React from 'react';
import { BottomBar } from './BottomBar';
import { Chat } from './Chat';
import TopBar from './TopBar';

export const Middle = () => {
  return (
    <div className='h-100 pt-4'>
      <div 
        className='h-100 d-flex flex-column' 
        style={{
          backgroundColor: '#FFFFFF', 
          borderRadius: '15px 15px 0px 0px',
          minHeight: '0px'
        }}
      >
        <div className='flex-grow-0'>
          <TopBar img={'/assets/eating.png'} name='Abobo Gaspar' status='typing...'/>
        </div>
        <Chat />
        <div className='flex-grow-0'>
          <BottomBar />
        </div>
      </div>
    </div>
  );
};
