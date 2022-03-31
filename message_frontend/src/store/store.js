import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './contactSlice';
import dialogSlice from './dialogSlice';

const store = configureStore({
  reducer: {
    contact: contactSlice,
    dialog: dialogSlice
  },
  //middleware: [thunkMiddleware],
}); 

export default store;