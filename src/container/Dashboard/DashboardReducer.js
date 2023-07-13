import * as types from "./DashboardActionTypes";
const initialState = {
 
  fetchingCategory: false,
  fetchingCategoryError: false,
  category: [],
};
export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY_REQUEST:
      return { ...state, fetchingCategory: true };
    case types.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        fetchingCategory: false,
        category: action.payload,
      };

    case types.GET_CATEGORY_FAILURE:
      return { ...state, fetchingCategory: false, fetchingCategoryError: true };

    default:
      return state;
  }
  return state;
};
