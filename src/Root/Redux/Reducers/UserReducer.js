import Actions from "../Actions/Actions";

const initialState = {
  user: null,
  token: null,
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.UserActions.LOGIN_USER_RESPONSE:
      console.log("user test ",action.payload)
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case Actions.UserActions.LOGOUT_USER:
      return{
        ...state,
        user:null,
      };
    case Actions.UserActions.UPDATE_USER_TO_STORE:
      return{
        ...state,
        user:action.payload,
      };
    default:
      return state;
  }
}
