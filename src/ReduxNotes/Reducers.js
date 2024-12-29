const initialState = {
 name: "rahul",
 rollno: 90,
};

const userReducer = (state = initialState, action) => {
 switch (action.type) {
   case 'CHANGE_USER_NAME':
     return {
       ...state,
       name: action.payload,
     };
   case 'CHANGE_USER_ROLL':
     return {
       ...state,
       rollno: action.payload,
     };
   default:
     return state;
 }
};
export default userReducer