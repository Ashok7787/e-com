import { combineReducers } from "redux";
//import { LOGOUT } from "../Containers/Auth/AuthTypes";
/**
 *  All of application reducers import goes here...
 */
import { userReducer } from "../container/Auth/UserReducer";
import { dashboardReducer } from "../container/Dashboard/DashboardReducer";
import { categoryReducer } from "../container/Category/CategoryReducer";
const appReducer = combineReducers({
  user: userReducer,
  dashboard:dashboardReducer,
  category:categoryReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    sessionStorage.clear();
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
