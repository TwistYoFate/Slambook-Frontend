import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "./Redux/Actions/Actions";
import Register from "./Components/auth/Register";
export default function App_desktop() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.blogs.blogs);

  useEffect(() => {
    dispatch({ type: Actions.blogActions.GET_ALL_BLOGS_FROM_DB });
  }, [dispatch]);
  return (
    <div>
      desktop
      <Register />
      {/* {data?.map((blog) => {
        return (
          <div className="blog" key={blog.bid}>
            <h2>{blog.title}</h2>
            <h4>{blog.author}</h4>
            <p>{blog.body}</p>
          </div>
        );
      })} */}
    </div>
  );
}
