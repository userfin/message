import React from 'react';
import { Divider } from '../../../components/Divider';
import { FileCard } from '../../../components/FileCard';
import { ProfileCard } from '../../../components/ProfileCard';

const bio = [
  { header: 'Phone', text: '+777777777' },
  { header: 'Bio', text: 'Very funny and gay person' },
  { header: 'Gender', text: 'Gay' },
];

export const RightBar = () => {
  return (
    <div className='h-100 py-5'>
      <ProfileCard 
        isOnline 
        img="/assets/eating.png"
        name="Abobo Gaspar"
        userTag="@3 суса"
      />

      <Divider maxWidth={'278px'}/>

      <div className='px-3'>
        {bio.map(b => 
          <div key={b.header}>   
            <h6>{b.header}</h6>
            <p>{b.text}</p> 
          </div>
        )}
      </div>

      <Divider maxWidth={'278px'}/>
       
      <div className='d-flex justify-content-between'>
        <h2>Files</h2>
        <p className='my-auto'>Veiw all</p>
      </div>
      <FileCard name='Sus' date='today' size='666'/>
      <FileCard name='Sus' date='today' size='666'/>
      <FileCard name='Sus' date='today' size='666'/>
      <FileCard name='Sus' date='today' size='666'/>
    </div>
  );
};
