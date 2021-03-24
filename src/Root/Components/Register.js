import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Actions from "../../Root/Redux/Actions/Actions";

/*
  This component is for authorization
  Route : /auth/register
*/
function Register (){
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
  };

  useEffect(() => {
    dispatch({ type: Actions.UserActions.REGISTER_USER_TO_DB, payload: user });
  }, [user]);

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={onSubmitHandle}>
        <input
          type="text"
          id="firstName"
          required
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          id="lastName"
          required
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          type="email"
          id="email"
          required
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
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
        <button>Register</button>
      </form>
      <div>{firstName}</div>
    </div>
  );
};

export default Register;
