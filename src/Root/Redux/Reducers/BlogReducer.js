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
    case Actions.BlogActions.SAVE_LIKE_TO_STORE:
      return blogUpdate(state,action);
    default:
      return state;
  }
}


//functions utils

function blogUpdate(state,{payload}){
  //get the blog to be updated
  let toBeUpdatedBlog = state.blogs.filter(blog=>blog._id===payload.id)[0];
  //update that blog
  let afterUpdateBlog = {...toBeUpdatedBlog,likes:payload.likes};
  //updating the array "blogs"
  const newBlogs = [...state.blogs.filter(blog=>blog._id!=payload.id),afterUpdateBlog];
  // returning the state 
  return {blogs:newBlogs};
}