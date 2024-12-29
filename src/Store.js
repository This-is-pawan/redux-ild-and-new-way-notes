import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './reducers/index'; 
const store = configureStore({
  reducer: RootReducer,
});
// const store = RootReducer
export default store;

