export interface IUserState {
  user: IUser;
  loading: boolean;
  error: string;
}

export interface IUser {
  _id: string;
  email: string;
  token: string;
  success: boolean;
}

const initState = {
  loading: false,
  error: "",

  user: {
    _id: "",
    email: "",
    token: "",
    success: false,
  },
};

export type TUserAction =
  | { type: "REGISTER"; payload: IUser }
  | { type: "LOGIN"; payload: IUser }
  | { type: "LOADING" }
  | { type: "FAIL" }
  | { type: "LOGOUT" };

const reducer = (state: IUserState = initState, action: TUserAction) => {
  switch (action.type) {
    case "REGISTER":
    case "LOGIN": {
      return { ...state, loading: false, user: action.payload };
    }
    case "LOADING": {
      return { ...state, loading: true };
    }
    case "FAIL": {
      return { ...state, loading: false };
    }
    case "LOGOUT": {
      return { ...initState };
    }
    default:
      return state;
  }
};
export default reducer;
