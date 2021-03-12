import Actions from "../Actions/Actions";

const initialState = {
  blogs: []
};

export default function BlogReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.BlogActions.SET_ALL_BLOGS_TO_STORE:
      return {
        ...state,
        blogs: action.payload
      };
    default:
      return state;
  }
}
