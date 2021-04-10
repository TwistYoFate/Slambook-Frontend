import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import Actions from "../../Root/Redux/Actions/Actions";
import { CustomButton, CustomTextField } from "../Utils/CustomUI";
import Loader from "../Utils/Loader";

function Settings() {
  const {user} = useSelector(state => state.user)

  const [redirectToLogin, setRedirectToLogin] = useState(false)
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [updateUser, setUpdateUser] = useState();

  const dispatch = useDispatch();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(user)
    setUpdateUser({
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
    dispatch({ type: Actions.UserActions.UPDATE_USER_TO_DB, payload: updateUser });
  }, [updateUser]);

  return (
    <div className="register">
      <h1>Update your profile</h1>
      <br />
      <h3>Fill the details that you want to update.</h3>
      <form id="update-form" onSubmit={onSubmitHandle}>
        <CustomTextField
          // type="text"
          label="First Name"
          id="firstName"
          variant="outlined"
          
        //   label="First Name"
          placeholder={user.firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <br /><br />
        <CustomTextField
          // type="text"
          id="lastName"
           
          variant="outlined" 
          label="Last Name"
          placeholder={user.lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <br /><br />
        <CustomTextField
          type="email"
          id="email"
           
          variant="outlined" 
          label="Email"
          placeholder={user.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br /><br />
        <CustomTextField
          // type="text"
          id="username"
          disabled="true" 
          variant="outlined"
          label={user.username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br /><br />
        <CustomTextField
          type="password"
          id="password"
           
          variant="outlined" 
          label="Password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br /><br />
        <CustomButton type="submit" form="update-form">Update</CustomButton>
        {/* <button>Register</button> */}
      </form>
      <div>
        {
          redirectToLogin?<Loader url="/slambook/login" />:null
        }
      </div>
    </div>
  );
}

export default Settings
