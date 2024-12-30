import { createSlice } from "@reduxjs/toolkit";
const init=0
const Cart=createSlice({
name:'cart',
amount:init,
reducers:{
 addCart:(state,action)=>{
  console.log(action);
  
   return state ;
  }
 },
})

export default Cart.reducers

