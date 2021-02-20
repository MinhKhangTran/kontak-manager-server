export interface IUserState {}

export type TUserAction = { type: string; payload?: any };

const reducer = (state: IUserState = {}, action: TUserAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
