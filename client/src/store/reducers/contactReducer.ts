export interface IContact {
  name: string;
  email: string;
  phone?: number;
  type: string;
}
export interface IContactState {
  contact: IContact;
  loading: boolean;
  contacts?: {
    data: IContact[];
  };
}

const initState = {
  loading: false,
  contact: {
    name: "",
    email: "",
    phone: 0,
    type: "privat",
  },
  contacts: {
    data: [],
  },
};

export type TContactAction =
  | { type: "ADDING"; payload: IContact }
  | { type: "CONTACT_LOADING" }
  | { type: "CONTACT_FAIL" }
  | { type: "FETCHING_CONTACTS"; payload: IContact[] };

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
      return { ...state, loading: false, contacts: { data: action.payload } };
    }

    default:
      return state;
  }
};
export default reducer;
