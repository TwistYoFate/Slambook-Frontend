import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "./Redux/Actions/Actions";
import Navbar_Resume from "./Components/ResumeContent/Navbar_Resume";
import {Route, Switch} from 'react-router-dom'
import Home from "./Routes/Home";
import Resume from "./Routes/Resume";
import Test from "./Utils/Test";
import Dash from "./Routes/Dash";


export default function App_desktop() {

  //Call all blogs before the routes are rendered
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type:Actions.BlogActions.GET_ALL_BLOGS_FROM_DB})
  }, [])

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
            <Dash />
          }
        </Route>

      </Switch>
    </div>
  );
}
