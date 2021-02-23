import { Dispatch } from "redux";
import { IUser } from "../reducers/userReducer";
import { IContact } from "../reducers/contactReducer";
import { InferableComponentEnhancerWithProps } from "react-redux";

// auth
export const loading = () => ({
  type: "LOADING",
});
export const fail = () => ({
  type: "FAIL",
});
export const register = (user: IUser) => ({
  type: "REGISTER",
  payload: user,
});
export const login = (user: IUser) => ({
  type: "LOGIN",
  payload: user,
});
export const logout = () => ({
  type: "LOGOUT",
});

// Contacts
export const contactLoading = () => ({
  type: "CONTACT_LOADING",
});
export const contactFail = () => ({
  type: "CONTACT_FAIL",
});
export const addContact = (contact: IContact) => ({
  type: "ADDING",
  payload: contact,
});
export const fetching = (contacts: IContact[]) => ({
  type: "FETCHING_CONTACTS",
  payload: contacts,
});

export const setCurrent = (contact: IContact) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "SET_CURRENT",
      payload: contact,
    });
  };
};
// toast
export const toast_success = (msg: string) => ({
  type: "TOAST_SUCCESS",
  payload: msg,
});
export const toast_fail = (msg: string) => ({
  type: "TOAST_FAIL",
  payload: msg,
});
export const clearToast = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: "CLEAR_TOAST" });
  };
};

// wegen clean up function
export const deleteContact = () => ({
  type: "DELETE_CONTACT",
});

export const updateContact = (contact: IContact) => ({
  type: "UPDATE_CONTACT",
  payload: contact,
});
