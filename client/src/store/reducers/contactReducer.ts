export interface IContactState {}

export type TContactAction = { type: string; payload?: any };

const reducer = (state: IContactState = {}, action: TContactAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
