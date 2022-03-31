import React from 'react';
import { useSelector } from 'react-redux';
import { Divider } from '../../../components/Divider';
import { FileCard } from '../../../components/FileCard';
import { ProfileCard } from '../../../components/ProfileCard';

export const RightBar = () => {
  const companion = useSelector((state) => state.dialog.companion);
  const files = useSelector((state) => state.dialog.files);
  console.log(files);
  const bio = [
    { header: 'Phone', text: companion.phone },
    { header: 'Bio', text: companion.bio },
  ];

  console.log(companion);
  return (
    <div className='h-100 py-5'>
      <ProfileCard 
        isOnline 
        img={companion?.image?.src}
        name={companion.name} 
        userTag={companion.tag}
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
      {files.map(file =>
        file.file
          ?<FileCard name={file.file.fileName} date={file.file.creatingDate} size={file.file.size}/>
          :<FileCard name={file.image.fileName} date={file.image.creatingDate} size={file.image.size}/>
      )} 
    </div>
  );
};
