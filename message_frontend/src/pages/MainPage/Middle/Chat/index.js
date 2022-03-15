import React from 'react';
import { Message } from '../../../../components/Message';

export const Chat = () => {
  return (
    <div className='p-4 my-2 flex-grow-1 flex-shrink-1 overflow-auto'>
      <Message 
        fromMe 
        time='12:22' 
        type='img' 
        src='/assets/eating.png' 
        message='asadasdasd'
      />

      <Message 
        fromMe={false}
        time='12:22' 
        type='txt' 
        message='asadasdasd'
      />

      <Message 
        fromMe={false}
        time='12:22' 
        type='txt' 
        message='asadasdasd'
      />

      <Message 
        fromMe={false}
        time='12:22' 
        type='file' 
        message='asadasdasd'
        fileProps={{
          name: 'sussssadd',
          date: 'tomorrow',
          src: '/assets/bell.svg',
          size: '100 Mb'
        }}
      />

      <Message 
        fromMe 
        time='12:22' 
        type='img' 
        src='https://a.d-cd.net/c74602ds-1920.jpg' 
        message='asadasdasd'
      />

      <Message 
        fromMe={false} 
        time='12:22' 
        type='img' 
        src='https://i.pinimg.com/originals/e7/37/97/e73797e90db90a056e96291ca4f2a788.jpg' 
        message='asadasdasd'
      />

<Message 
        fromMe={false} 
        time='12:22' 
        type='img' 
        src='/assets/bell.svg' 
        message='asadasdasd'
      />

      <Message 
        fromMe={false}
        time='12:22' 
        type='txt' 
        message='asadasdasd'
      />
    </div>
  );
};
