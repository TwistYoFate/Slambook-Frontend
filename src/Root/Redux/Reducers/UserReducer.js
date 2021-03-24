import Actions from "../Actions/Actions";

const initialState = {
  user: null,
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.UserActions.LOGIN_USER_RESPONSE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
