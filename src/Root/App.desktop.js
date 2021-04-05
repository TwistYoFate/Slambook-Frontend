import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "./Redux/Actions/Actions";
import Navbar_Resume from "./Components/ResumeContent/Navbar_Resume";
import {Route, Switch, useHistory} from 'react-router-dom'
import Home from "./Routes/Home";
import Resume from "./Routes/Resume";
import Test from "./Utils/Test";
import Dash from "./Routes/Dash";
import Unauthorized from "./Components/Unauthorized";


export default function App_desktop() {
  const {user} = useSelector(state=>state.user);
  const {blogs} = useSelector(state=>state.blogs);
  const [isTokenThere, setIsTokenThere] = useState(localStorage.getItem("token"))
  const history = useHistory()
  console.log(user);
  
  const dispatch = useDispatch();
  useEffect(() => {
    /* 
    if there is token present in local storage, then it means 
    that the page was refreshed, so use that token to relogin the 
    user automatically
    */
   console.log("event")
   let token = localStorage.getItem("token");
   token?setIsTokenThere(token):setIsTokenThere(null);
   if(token && !user){
      dispatch({type:Actions.UserActions.RELOGIN_USER_USING_TOKEN})
   }
   //Call all blogs before the routes are rendered
   if(!blogs)   
      dispatch({type:Actions.BlogActions.GET_ALL_BLOGS_FROM_DB})
  })

  
  return (
    <div className="container">
      <Switch>

        {/* <Route exact path="">
          <Test />
        </Route> */}

        <Route exact path="/resume">
          <Resume />
        </Route>

        <Route exact path="/slambook/:pm1">
          <Home />
        </Route>

        <Route exact path="/slambook/dash/:pm1">
          {
            isTokenThere?<Dash blogs={blogs} user={user} setIsTokenThere={setIsTokenThere} isTokenThere={isTokenThere}/>:history.replace('/slambook/home')
          }
        </Route>

        <Route exact path="/unauthorized">
          <Unauthorized />
        </Route>

      </Switch>
    </div>
  );
}
