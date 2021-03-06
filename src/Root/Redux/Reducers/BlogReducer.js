import Actions from "../Actions/Actions";

const initialState = {
  blogs: []
};

export default function BlogReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.BlogActions.GET_ALL_BLOGS_FROM_DB:
      return {
        ...state,
        blogs: action.payload
      };
    default:
      return state;
  }
}
