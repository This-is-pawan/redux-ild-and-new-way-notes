
import Cart from './Cart' 
import { configureStore } from '@reduxjs/toolkit'
export const store=configureStore({
reducer:{
 Cart,
},

})
