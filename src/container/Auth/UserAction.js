import { base_url, login_url } from "../../Config/Auth";
import * as types from "./UserActionTypes";
import axios from "axios";
import { message, notification } from "antd";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
export const login = (email, password) => (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  axios
    .post(`${login_url}/users/login`, email, password)

    .then((res) => {
      console.log(res);
      history.push("/");
     dispatch(userDetails(res.data.accessToken));
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

export const userDetails = (accessToken) => (dispatch) => {
  dispatch({
    type: types.USER_DETAILS_REQUEST,
  });
  axios
    .get(`${base_url}/users/current`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })

    .then((res) => {
      console.log(res);

      dispatch({
        type: types.USER_DETAILS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err && err.response && err.response.data);
      dispatch({
        type: types.USER_DETAILS_FAILURE,
        payload: err,
      });
    });
};
