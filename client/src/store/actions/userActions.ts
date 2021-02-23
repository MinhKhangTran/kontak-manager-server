import { Dispatch } from "redux";
import * as users from "./index";
import axios from "axios";

export const API_ENDPOINT = "https://kontakt-manager-app.herokuapp.com";

axios.defaults.headers.post["Content-Type"] = "application/json";

interface IRegister {
  email: string;
  name: string;
  password: string;
}

interface ILogin {
  email: string;
  password: string;
}

export const register = (values: IRegister) => {
  return async (dispatch: Dispatch) => {
    const { email, password, name } = values;
    dispatch(users.loading());
    try {
      const { data } = await axios.post(
        `${API_ENDPOINT}/api/a1/users/register`,
        { email, password, name }
      );
      //   console.log(data);
      dispatch(users.register(data));
      dispatch(users.toast_success("Erfolgreich angemeldet :D"));
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      dispatch(users.fail());
      dispatch(users.toast_fail(error.response.data.message || "FEHLER"));
    }
  };
};

export const login = (values: ILogin) => {
  return async (dispatch: Dispatch) => {
    const { email, password } = values;
    dispatch(users.loading());
    try {
      const { data } = await axios.post(`${API_ENDPOINT}/api/a1/users/login`, {
        email,
        password,
      });
      //   console.log(data);
      dispatch(users.login(data));
      dispatch(users.toast_success("Erfolgreich eingeloggt :D"));
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      //   console.log(typeof error.response.data.message);
      dispatch(users.fail());
      dispatch(users.toast_fail(error.response.data.message || "FEHLER"));
    }
  };
};

export const logout = () => {
  return (dispatch: Dispatch) => {
    dispatch(users.logout());
    dispatch(users.toast_success("Bis zum nächsten mal :D"));
    localStorage.removeItem("user");
  };
};
