import React, { useContext } from 'react';
import { MessageCard } from '../../../components/MessageCard';
import styles from './LeftBar.module.scss';
import { ProfileCard } from '../../../components/ProfileCard';
import { Divider } from '../../../components/Divider';
import { selectContacts } from '../../../store/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../components/Button';
import { ContactInput } from './ContactInput';
import { WebSocketContext } from '../../../components/SocketHandler';
import { setCompanion } from '../../../store/dialogSlice';

export const LeftBar = () => {
  const dispatch = useDispatch();

  const abobo = useSelector((state) => state.contact.contacts);
  console.log('Ya susik');
  console.log(abobo);
  const [isAddContact, setIsAddContact] = React.useState(false);
  const toggleAddContact = () => {
    setIsAddContact(prev => !prev);
  };
  const {myProfile, requestFiles, requestMessages} = useContext(WebSocketContext);
  const handleDialogClick = (companion) => {
    dispatch(setCompanion(companion));
    requestMessages(companion.id);
    requestFiles(companion.id);
  };
  return (
    <div className='h-100 d-flex flex-column overflow-hidden py-5'>
      <ProfileCard 
        isOnline 
        img={myProfile?.image?.src}
        name={myProfile?.name}
        userTag={myProfile?.tag}
      />
      <Divider maxWidth={'278px'}/>
      <div className={`flex-column overflow-auto ${styles.scroll}`}>

        {abobo && abobo.map((contact)=>
          <MessageCard 
            key={contact.companion.id}
            time={contact?.lastMessage?.sendingDate}
            img={contact?.companion?.image?.src}
            text={contact?.lastMessage?.text}
            name={contact.companion.name} 
            unread={contact.unreadCount}
            onClick={()=>handleDialogClick(contact?.companion)}
          />
        )}
      </div>
      
      <div className='flex-grow-1 flex-shrink-1'>
        <Divider maxWidth={'278px'} />
        <div>
          {isAddContact 
            ? <ContactInput handleInputCLose={toggleAddContact}/>
            : <Button onClick={toggleAddContact}>
              <p className='m-0 p-2' style={{textAlign:'center'}}>Start more chats!</p> 
            </Button>}
        </div>
      </div>
    </div>
  );
};
