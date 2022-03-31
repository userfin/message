import React, { createContext } from 'react';
import io, { Socket } from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { addContact, addContacts } from '../../store/contactSlice';
import { addFiles, addMessages, toggleIsOnline } from '../../store/dialogSlice';

const WebSocketContext = createContext({
  startMoreChats: (m) => console.log('Send message not implemented!'),
  foundUsersByTag: [],
  myProfile: {},
  requestMessages: () => console.log(),
  requestFiles: () => console.log(),
  requestUsersByTag: (tag) => console.log('Абобо двигает вот так')
});

export { WebSocketContext };

//maybe WebsocketChatProvider will be better
export const SocketHandler = ({ children }) => {

  const dispatch = useDispatch();

  const [socket, setSocket] = React.useState();
  const [users, setUsers] = React.useState([]);
  const [myProfile, setMyProfile] = React.useState([]);

  // WS CONNECTION
  React.useEffect(()=>{
    const token = localStorage.getItem('token');
    console.log(token);
    setSocket(
      io(process.env.REACT_APP_WS_ADDRESS, {extraHeaders: { Authorization: 'Bearer ' + token}} )
    );
    return () => {socket?.disconnect();};
  },[]);

  React.useEffect(()=>{
    if (socket !== undefined) {

      //Веб-сокет слушатели событий 
      socket.on('receive_initial_dialogs', (data) => {
        console.log(data);
        dispatch(addContacts(data));
      });
      socket.on('receive_users_by_tag', (data) => {
        console.log(data);
        setUsers(data);
      });
      socket.on('receive_new_contact', (data) => {
        console.log(data);
        dispatch(addContact(data));
      });
      socket.on('recive_my_profile', (data) => {
        console.log(data);
        setMyProfile(data);
      });

      socket.on('receive_messages', (data) => {
        console.log(data);
        dispatch(addMessages(data));
      });
      socket.on('receive_files', (data) => {
        console.log(data);
        dispatch(addFiles(data));
      });
      socket.on('receive_become_online', (data) => {
        console.log(data);
        dispatch(toggleIsOnline(true));
      });
      socket.on('receive_become_offline', (data) => {
        console.log(data);
        dispatch(toggleIsOnline(false));
      });
      //Начальные запросы к веб-сокет серверу
      socket.emit('request_contacts');

    }
  },[socket]);

  // Вебсокет запросы
  const startMoreChats = (companionId) => {
    socket?.emit('add_contact', {companionId});
  };

  const requestUsersByTag = (tag) => {
    socket?.emit('request_users_by_tag', {tag});
  };

  const requestMessages = (companionId) => {
    socket?.emit('request_dialog_messages', {companionId});
  };

  const requestFiles = (companionId) => {
    socket?.emit('request_dialog_files', {companionId});
  };

  const ws = {
    startMoreChats: startMoreChats,
    foundUsersByTag: users,
    requestUsersByTag,
    myProfile,
    requestMessages,
    requestFiles
  };

  return (
    <WebSocketContext.Provider value={ws}>
      {children}
    </WebSocketContext.Provider>
  );
};