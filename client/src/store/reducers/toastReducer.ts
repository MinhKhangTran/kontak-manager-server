export interface IToastState {
  msg: string;
  type: string;
  gelöscht?: boolean;
  update?: boolean;
}

export type TToastAction =
  | { type: "TOAST_SUCCESS"; payload: string }
  | { type: "TOAST_FAIL"; payload: string }
  | { type: "CLEAR_TOAST" }
  | { type: "DELETE_CONTACT" }
  | { type: "UPDATE_CONTACT" };

const reducer = (
  state: IToastState = { msg: "", type: "" },
  action: TToastAction
): IToastState => {
  switch (action.type) {
    case "TOAST_SUCCESS": {
      return { ...state, msg: action.payload, type: "success" };
    }
    case "TOAST_FAIL": {
      return { ...state, msg: action.payload, type: "error" };
    }
    case "CLEAR_TOAST": {
      return { msg: "", type: "", gelöscht: false };
    }
    case "DELETE_CONTACT": {
      return { ...state, gelöscht: true };
    }
    case "UPDATE_CONTACT": {
      return { ...state, update: true };
    }
    default:
      return state;
  }
};
export default reducer;
