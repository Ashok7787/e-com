import { base_url, login_url } from "../../Config/Auth";
import * as types from "./UserActionTypes";
import axios from "axios";
import { message, notification } from "antd";
import { createBrowserHistory } from "history";

export const login = (email, password) => (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  axios
    .post(`${login_url}/users/login`, email, password)

    .then((res) => {
      console.log(res);
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err && err.response && err.response.data);
      dispatch({
        type: types.LOGIN_FAILURE,
        payload: err,
      });
    });
};
