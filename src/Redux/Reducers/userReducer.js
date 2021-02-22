import Actions from "../Actions/Actions";

const initialState = {
  user: {},
  isLoggedIn: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.userActions.GET_ONE_USER_FROM_DB:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true
      };
    default:
      return state;
  }
}
