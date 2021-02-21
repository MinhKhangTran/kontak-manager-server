import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { IUser } from "./reducers/userReducer";

const userInfoFromLocalStorage = (): IUser => {
  const user = localStorage.getItem("user");

  if (user) {
    return JSON.parse(user!);
  } else {
    return {
      _id: "",
      email: "",
      token: "",
      success: false,
    };
  }
};

interface IInitState {
  contacts: any;
  users: any;
}

const initState: IInitState = {
  contacts: {},
  users: { user: userInfoFromLocalStorage() },
};

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootStore = ReturnType<typeof rootReducer>;
export default store;
