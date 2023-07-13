import * as types from "./UserActionTypes";
const initialState = {
    logging: false,
    loginError: false,
    user: {},
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, logging: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        logging: false,
      };
    case types.LOGIN_FAILURE:
      return { ...state, logging: false, loginError: true };
    

    default:
      return state;
  }
  return state;
};
