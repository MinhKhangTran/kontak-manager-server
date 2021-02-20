import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  users: userReducer,
  contacts: contactReducer,
});
export default rootReducer;
