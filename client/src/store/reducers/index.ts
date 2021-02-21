import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import userReducer from "./userReducer";
import toastReducer from "./toastReducer";

const rootReducer = combineReducers({
  users: userReducer,
  contacts: contactReducer,
  toasts: toastReducer,
});
export default rootReducer;
