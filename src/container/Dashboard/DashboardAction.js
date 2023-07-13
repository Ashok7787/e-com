import { base_url, login_url } from "../../Config/Auth";
import * as types from "./DashboardActionTypes";
import axios from "axios";
import { message, notification } from "antd";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

export const getAllCategory = (driverId) => (dispatch) => {
  dispatch({
    type: types.GET_CATEGORY_REQUEST,
  });
  axios
    .get(`${base_url}/services`)
    .then((res) => {      
      dispatch({
        type: types.GET_CATEGORY_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: types.GET_CATEGORY_FAILURE,
        payload: err,
      });
      message.success("Something went wrong!!");
    });
};
