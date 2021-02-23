import { Action, Dispatch } from "redux";
import { IContact } from "../reducers/contactReducer";
import * as contacts from "./index";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootStore } from "..";

export const API_ENDPOINT = "https://kontakt-manager-app.herokuapp.com";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const addContacts = (
  values: IContact
): ThunkAction<void, RootStore, unknown, Action<string>> => {
  return async (dispatch: Dispatch, getState) => {
    dispatch(contacts.contactLoading());
    const { email, name, phone, type } = values;

    try {
      // get user from state
      const {
        users: { user },
      } = getState();
      // const headers config
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(
        `${API_ENDPOINT}/api/a1/contacts`,
        {
          email,
          name,
          phone,
          type,
        },
        config
      );
      //   console.log(data);
      dispatch(contacts.addContact(data));
      dispatch(contacts.toast_success("Neuer Kontakt wurde hinzugefügt"));
    } catch (error) {
      dispatch(contacts.contactFail());
      dispatch(contacts.toast_fail(error.response.data.message || "FEHLER"));
    }
  };
};

export const fetchingContacts = (): ThunkAction<
  void,
  RootStore,
  unknown,
  Action<string>
> => {
  return async (dispatch: Dispatch, getState) => {
    dispatch(contacts.contactLoading());

    try {
      // get user from state
      const {
        users: { user },
      } = getState();
      // const headers config
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(
        `${API_ENDPOINT}/api/a1/contacts`,

        config
      );
      // console.log(data.data);
      dispatch(contacts.fetching(data.data));
    } catch (error) {
      dispatch(contacts.contactFail());
      dispatch(contacts.toast_fail(error.response.data.message || "FEHLER"));
    }
  };
};

export const deleteContact = (
  id: string
): ThunkAction<void, RootStore, unknown, Action<string>> => {
  return async (dispatch: Dispatch, getState) => {
    try {
      // get user from state
      const {
        users: { user },
      } = getState();
      // const headers config
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      await axios.delete(
        `${API_ENDPOINT}/api/a1/contacts/${id}`,

        config
      );
      // console.log(data);
      dispatch(contacts.deleteContact());
      dispatch(contacts.toast_success("Kontakt wurde gelöscht!"));
    } catch (error) {
      dispatch(contacts.contactFail());
      dispatch(contacts.toast_fail(error.response.data.message || "FEHLER"));
    }
  };
};
export const updateContact = (
  contact: IContact,
  id: string
): ThunkAction<void, RootStore, unknown, Action<string>> => {
  return async (dispatch: Dispatch, getState) => {
    try {
      // get user from state
      const {
        users: { user },
      } = getState();
      // const headers config
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.put(
        `${API_ENDPOINT}/api/a1/contacts/${id}`,
        contact,

        config
      );
      // console.log(data);
      dispatch(contacts.updateContact(data.data));
      dispatch(contacts.toast_success("Kontakt wurde geändert!"));
    } catch (error) {
      dispatch(contacts.contactFail());
      dispatch(contacts.toast_fail(error.response.data.message || "FEHLER"));
    }
  };
};
