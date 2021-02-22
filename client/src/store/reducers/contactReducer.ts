export interface IContact {
  name: string;
  email: string;
  phone?: number;
  type: string;
}
export interface IContactState {
  contact: IContact;
  loading: boolean;
}

const initState = {
  loading: false,
  contact: {
    name: "",
    email: "",
    phone: 0,
    type: "privat",
  },
};

export type TContactAction =
  | { type: "ADDING"; payload: IContact }
  | { type: "CONTACT_LOADING" }
  | { type: "CONTACT_FAIL" };

const reducer = (state: IContactState = initState, action: TContactAction) => {
  switch (action.type) {
    case "CONTACT_LOADING": {
      return { ...state, loading: true };
    }
    case "ADDING": {
      return { ...state, contact: action.payload, loading: false };
    }
    case "CONTACT_FAIL": {
      return { ...state, loading: false };
    }

    default:
      return state;
  }
};
export default reducer;
