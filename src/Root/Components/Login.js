import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Actions from "../../Root/Redux/Actions/Actions";
import {Link, Redirect, useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { CustomButton, CustomTextField } from "../Utils/CustomUI";
/*
  This component is for authorization
  Route : /auth/login
*/
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Login (){
  const classes = useStyles();
  const history = useHistory()
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [sessionLength, setSessionLength] = useState(0.5);
  const [user, setUser] = useState();
  const [redirectToDash,setRedirectToDash] = useState(false);

  // To stop the useEffect running on first render
  const initialRender = useRef(true);

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
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      dispatch({ type: Actions.UserActions.LOGIN_USER, payload: user });
    }
  }, [user]);

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={onSubmitHandle}>
        <CustomTextField
          required
          // id="outlined-required"
          label="Username"
          // defaultValue="Username"
          variant="outlined"
          // type="text"
          id="username"
          // required
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br /><br />
        <CustomTextField
        //  id="outlined-password-input"
         label="Password"
         type="password"
         autoComplete="current-password"
         variant="outlined"
          // type="password"
          id="password"
          required
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br /><br />
        <CustomTextField
          type="number"
          step="0.1"
          id="sessionLength"
          label="Session Length (hrs)"
          placeholder="Session Length (hrs)"
          variant="outlined"
          onChange={(e) => {
            setSessionLength(e.target.value);
          }}
        />
        <br /><br />
        {/* <Button variant="Primary">Login</Button> */}
        <Link to="/slambook/reset" style={{textDecoration:0}}><p >Forgot Password</p></Link>
        <CustomButton type="submit">Login</CustomButton>
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
