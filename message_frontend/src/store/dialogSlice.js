import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  companion: {},
  messages: [],
  files: []
};

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState, 
  reducers: {
    setCompanion: (state, action) => {
      console.log(action.payload);
      state.companion = {...action.payload, isOnline: false};
      state.messages=[];
      state.files=[];
    },  
    addMessages: (state, action) => {
      state.messages = [...state.messages, ...action.payload];
    },  
    addFiles: (state, action) => {
      state.files = [...state.files, ...action.payload];
      console.log(action.payload);
    },
    toggleIsOnline: (state, action) => {
      state.companion.isOnline = action.payload;
    }, 
  },
});

//actions
export const { setCompanion, addMessages, addFiles, toggleIsOnline } = dialogSlice.actions;

export default dialogSlice.reducer;