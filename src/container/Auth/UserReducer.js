import * as types from "./UserActionTypes";
const initialState = {
  logging: false,
  loginError: false,
  user: {},

  fetchingUserDetails: false,
  fetchingUserDetailsError: false,
  userDetails: {},
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

    case types.USER_DETAILS_REQUEST:
      return { ...state, fetchingUserDetails: true };
    case types.USER_DETAILS_SUCCESS:
      return {
        ...state,
        fetchingUserDetails: false,
        userDetails: action.payload,
      };

    case types.USER_DETAILS_FAILURE:
      return { ...state, fetchingUserDetails: false, fetchingUserDetailsError: true };

    default:
      return state;
  }
  return state;
};
