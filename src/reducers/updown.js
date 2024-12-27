//  this is a reducer (machine ) we can use multiple reducer in our code or project of react coure so PLEASE THE NOTE THIS POINT


const initialState = 0;

const changeNum = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default changeNum;
