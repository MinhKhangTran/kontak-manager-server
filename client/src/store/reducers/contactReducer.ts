export interface IContact {
  name: string;
  email: string;
  phone?: number;
  type: string;
  _id?: string;
}
export interface IContactState {
  contact: IContact;
  loading: boolean;
  contacts?: IContact[];
  current?: any;
}

const initState = {
  loading: false,
  contact: {
    name: "",
    email: "",
    phone: 0,
    type: "privat",
  },
  contacts: [],
  current: null,
};

export type TContactAction =
  | { type: "ADDING"; payload: IContact }
  | { type: "CONTACT_LOADING" }
  | { type: "CONTACT_FAIL" }
  | { type: "FETCHING_CONTACTS"; payload: IContact[] }
  | { type: "SET_CURRENT"; payload: IContact };

const reducer = (
  state: IContactState = initState,
  action: TContactAction
): IContactState => {
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
    case "FETCHING_CONTACTS": {
      return { ...state, loading: false, contacts: action.payload };
    }
    case "SET_CURRENT": {
      return { ...state, current: action.payload };
    }

    default:
      return state;
  }
};
export default reducer;
