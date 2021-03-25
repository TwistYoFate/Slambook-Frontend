import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Actions from "../../Root/Redux/Actions/Actions";
import {Redirect} from 'react-router-dom';
/*
  This component is for authorization
  Route : /auth/login
*/
function Login (){
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [sessionLength, setSessionLength] = useState(0.5);
  const [user, setUser] = useState();
  const [redirectToDash,setRedirectToDash] = useState(false);

  const dispatch = useDispatch();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    setUser({
      username: username,
      password: password,
      sessionLength:sessionLength,
    });
    setRedirectToDash(true);
  };

  useEffect(() => {
    dispatch({ type: Actions.UserActions.LOGIN_USER, payload: user });
  }, [user]);

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={onSubmitHandle}>
        <input
          type="text"
          id="username"
          required
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          id="password"
          required
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="text"
          id="sessionLength"
          placeholder="Time duration for staying logged in. (hours)"
          onChange={(e) => {
            setSessionLength(e.target.value);
          }}
        />
        <button>Login</button>
      </form>
      <div>
        {
          redirectToDash?<Redirect to="/slambook/dash/default"/>:null
        }
      </div>
    </div>
  );
};

export default Login;
