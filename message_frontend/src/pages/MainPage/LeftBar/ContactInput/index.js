import React from 'react';
import { Button } from '../../../../components/Button';
import { WebSocketContext } from '../../../../components/SocketHandler';
import styles from './ContactInput.module.scss';

export const ContactInput = ({
  handleInputCLose
}) => {
  const [tag, setTag] = React.useState('');
  const wsContext = React.useContext(WebSocketContext);
  const users = wsContext.foundUsersByTag;
  console.log(users);

  React.useEffect(()=>{
    wsContext.requestUsersByTag(tag);
  }, [tag]);

  const onChange = (e) => {
    setTag(e.target.value);
  };

  const addContact = (contactID) => {
    wsContext.startMoreChats(contactID);
    handleInputCLose();
  };

  return (
    <div>

      <ul className={styles.addUser}>
        {users.map((user)=>
          <Button key={user.id} onClick={()=>addContact(user.id)}>
            <li>{user.tag}</li>
          </Button>)}
      </ul>

      <input value={tag} onChange={onChange}/>

    </div>
  );
};
