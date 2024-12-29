import { configureStore } from "@reduxjs/toolkit";
import Reducers from '../ReduxNotes/Reducers'
const store = configureStore({
 reducer: {
   user: Reducers,
 },
});
export default store