import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  contacts: []
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState, 
  reducers: {
    addContacts: (state, action) => {
      console.log(action.payload);
      state.contacts = [...state.contacts, ...action.payload];
    },  
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },  
    removeContact: (state, action) => {
      state.contacts = [
        ...state.contacts.filter(contact => contact.userId!=action.payload.userId )
      ];
    },
    setIsOnline: (state, action) => {
      state.contacts = state.contacts.map(contact=> {
        if (contact.userId === action.payload.userId) {
          contact.isOnline = action.payload.isOnline;
          return contact;
        }
        return contact;
      });
    }, 
  },
});

//actions
export const { addContacts, addContact, removeContact, setIsOnline } = contactSlice.actions;
//selectors
export const selectContacts = (state) => state.contacts;

export default contactSlice.reducer;