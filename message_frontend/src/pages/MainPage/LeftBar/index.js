import React from 'react';
import { MessageCard } from '../../../components/MessageCard';
import styles from './LeftBar.module.scss';
import { ProfileCard } from '../../../components/ProfileCard';
import { Divider } from '../../../components/Divider';

export const LeftBar = () => {
  return (
    <div className='h-100 d-flex flex-column overflow-hidden py-5'>
      <ProfileCard 
        isOnline 
        img="/assets/eating.png"
        name="Abobo Gaspar"
        userTag="@3 суса"
      />
      <Divider maxWidth={'278px'}/>
      <div className={`flex-column overflow-auto ${styles.scroll}`}>
        
        <MessageCard 
          time="12:66" 
          img="/assets/eating.png" 
          text="boboa asdf asdf saf asf sadf saf sd " 
          name="Ya Susik" 
          unread={1}
        />
        <MessageCard 
          time="12:66" 
          img="/assets/eating.png" 
          text="boboa" 
          name="YA" 
          unread={1}
        />
        <MessageCard 
          time="12:66" 
          img="/assets/eating.png" 
          text="boboa" 
          name="YA" 
          unread={1}
        />
        <MessageCard 
          time="12:66" 
          img="/assets/eating.png" 
          text="boboa" 
          name="YA" 
          unread={1}
        />
        <MessageCard 
          time="12:66" 
          img="/assets/eating.png" 
          text="boboa" 
          name="YA" 
          unread={1}
        />
        <MessageCard 
          time="12:66" 
          img="/assets/eating.png" 
          text="boboa" 
          name="YA" 
          unread={1}
        />
        <MessageCard 
          time="12:66" 
          img="/assets/eating.png" 
          text="boboa" 
          name="YA" 
          unread={1}
        />
        <MessageCard 
          time="12:66" 
          img="/assets/eating.png" 
          text="boboa" 
          name="YA" 
          unread={1}
        />
        <MessageCard 
          time="12:66" 
          img="/assets/eating.png" 
          text="boboa" 
          name="YA" 
          unread={1}
        />
        <MessageCard 
          time="12:66" 
          img="/assets/eating.png" 
          text="boboa" 
          name="YA" 
          unread={1}
        />
        <MessageCard 
          time="12:66" 
          img="/assets/eating.png" 
          text="boboa" 
          name="YA" 
          unread={1}
        />
        <MessageCard 
          time="12:66" 
          img="/assets/eating.png" 
          text="boboa" 
          name="YA" 
          unread={1}
        />
        <MessageCard 
          time="12:66" 
          img="/assets/eating.png" 
          text="boboa" 
          name="YA" 
          unread={1}
        />
        <MessageCard 
          time="12:66" 
          img="/assets/eating.png" 
          text="boboa" 
          name="YA" 
          unread={1}
        />
      </div>
      
      <div className='flex-grow-1 flex-shrink-1'>
        <Divider maxWidth={'278px'} />
        <p style={{textAlign:'center'}}>Start more chats!</p>
      </div>
    </div>
  );
};
