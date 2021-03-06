import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "./Redux/Actions/Actions";
import Navbar_Resume from "./Components/Navbar_Resume";
import {Route, Switch} from 'react-router-dom'
import Home from "./Routes/Home";


export default function App_desktop() {

  return (
    <div className="container">
      <Switch>

        <Route path="/resume">
          {//resume
          }
        </Route>

        <Route path="/slambook/:pm1">
          <Home />
        </Route>

        <Route path="/dash/:pm1">
          {//dash
          }
        </Route>

      </Switch>
    </div>
  );
}
