import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import Actions from "../../Root/Redux/Actions/Actions";
import { CustomButton, CustomTextField } from "../Utils/CustomUI";

/*
  This component is for authorization
  Route : /auth/register
*/
function Register (){
  const [redirectToLogin, setRedirectToLogin] = useState(false)
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();

  const dispatch = useDispatch();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    setUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password,
    });
    setRedirectToLogin(true)
  };

  useEffect(() => {
    console.log(user)
    dispatch({ type: Actions.UserActions.REGISTER_USER_TO_DB, payload: user });
  }, [user]);

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={onSubmitHandle}>
        <CustomTextField
          // type="text"
          id="firstName"
          variant="outlined"
          required
          label="First Name"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <br /><br />
        <CustomTextField
          // type="text"
          id="lastName"
          required 
          variant="outlined" 
          label="Last Name"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <br /><br />
        <CustomTextField
          type="email"
          id="email"
          required 
          variant="outlined" 
          label="Email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br /><br />
        <CustomTextField
          // type="text"
          id="username"
          required 
          variant="outlined" 
          label="Username"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br /><br />
        <CustomTextField
          type="password"
          id="password"
          required 
          variant="outlined" 
          label="Password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br /><br />
        <CustomButton type="submit">Register</CustomButton>
        {/* <button>Register</button> */}
      </form>
      <div>
        {
          redirectToLogin?<Redirect to="/slambook/login" />:null
        }
      </div>
    </div>
  );
};

export default Register;
