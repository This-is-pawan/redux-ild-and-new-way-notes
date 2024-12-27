import { combineReducers } from 'redux';
import changeNum from './updown'; 

const RootReducer = combineReducers({
  changeNum, 
});

export default RootReducer;
