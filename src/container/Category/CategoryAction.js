import { base_url, login_url } from "../../Config/Auth";
import * as types from "./CategoryActionTypes";
import axios from "axios";
import { message, notification } from "antd";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

export const getCategoryDetailsById = (id) => (dispatch) => {
  dispatch({
    type: types.GET_CATEGORY_DETAILS_BY_ID_REQUEST,
  });
  axios
    .get(`${base_url}/services/${id}`)
    .then((res) => {      
      dispatch({
        type: types.GET_CATEGORY_DETAILS_BY_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_CATEGORY_DETAILS_BY_ID_FAILURE,
        payload: err,
      });
      message.success("Something went wrong!!");
    });
};
export const getBookList = () => (dispatch) => {
  dispatch({
    type: types.GET_BOOK_LIST_BY_ID_REQUEST,
  });
  axios
    .get(`${base_url}/books`)
    .then((res) => {      
      dispatch({
        type: types.GET_BOOK_LIST_BY_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_BOOK_LIST_BY_ID_FAILURE,
        payload: err,
      });
      message.success("Something went wrong!!");
    });
};

export const getBookDetails = (id) => (dispatch) => {
  dispatch({
    type: types.GET_BOOK_DETAILS_ID_REQUEST,
  });
  axios
    .get(`${base_url}/books/${id}`)
    .then((res) => {      
      dispatch({
        type: types.GET_BOOK_DETAILS_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_BOOK_DETAILS_ID_FAILURE,
        payload: err,
      });
      message.success("Something went wrong!!");
    });
};