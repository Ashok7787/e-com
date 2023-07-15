import * as types from "./CategoryActionTypes";
const initialState = {
  fetchingCategoryDetails: false,
  fetchingCategoryDetailsError: false,
  categoryDetails: {},

  fetchingBookListById: false,
  fetchingBookListByIdError: false,
  bookList:[],

  fetchingBookDetailsById: false,
  fetchingBookDetailsByIdError: false,
  bookDetails:{},

};
export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY_DETAILS_BY_ID_REQUEST:
      return { ...state, fetchingCategoryDetails: true };
    case types.GET_CATEGORY_DETAILS_BY_ID_SUCCESS:
      return {
        ...state,
        fetchingCategoryDetails: false,
        categoryDetails: action.payload,
      };

    case types.GET_CATEGORY_DETAILS_BY_ID_FAILURE:
      return {
        ...state,
        fetchingCategoryDetails: false,
        fetchingCategoryDetailsError: true,
      };

    case types.GET_BOOK_LIST_BY_ID_REQUEST:
      return { ...state, fetchingBookListById: true };
    case types.GET_BOOK_LIST_BY_ID_SUCCESS:
      return {
        ...state,
        fetchingBookListById: false,
        bookList: action.payload,
      };

    case types.GET_BOOK_LIST_BY_ID_FAILURE:
      return {
        ...state,
        fetchingBookListById: false,
        fetchingBookListByIdError: true,
      };

      case types.GET_BOOK_DETAILS_ID_REQUEST:
      return { ...state, fetchingBookDetailsById: true };
    case types.GET_BOOK_DETAILS_ID_SUCCESS:
      return {
        ...state,
        fetchingBookDetailsById: false,
        bookDetails: action.payload,
      };

    case types.GET_BOOK_DETAILS_ID_FAILURE:
      return {
        ...state,
        fetchingBookDetailsById: false,
        fetchingBookDetailsByIdError: true,
      };

    default:
      return state;
  }
  return state;
};
