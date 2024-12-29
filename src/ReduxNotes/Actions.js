const CHANGE_USER_NAME = "CHANGE_USER_NAME";
const CHANGE_USER_ROLL = "CHANGE_USER_ROLL";

// Action Creators
export const changeUserName = (newName) => ({
  type: CHANGE_USER_NAME,
  payload: newName,
});

export const changeUserRoll = (newRoll) => ({
  type: CHANGE_USER_ROLL,
  payload: newRoll,
});