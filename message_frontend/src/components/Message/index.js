import React from 'react';
import styles from './Message.module.scss';
import { FileCard } from '../FileCard';

export const Message = ({
  fromMe, time, type, src, message, fileProps
}) => {
  return (
    <div className={`d-flex mb-2 ${fromMe ? 'justify-content-end' : 'justify-content-start' }`}>
      <div>
        <div className={fromMe ? styles.myMessage : styles.fromMessage}>
          <div  > 
            {type === 'img' &&
              <img style={{maxHeight: '300px', maxWidth:'100%'  }} src={src} alt=''/>
            }
            {type === 'file' &&
              <FileCard 
                name={fileProps.name} 
                date={fileProps.date} 
                size={fileProps.size} 
                src={fileProps.scr}
              />
            }
          </div>
          <div className='p-2'> 
            {message}
          </div>

        </div>
        <p>
          {time}
        </p>
      </div>
    </div>
  );
};
