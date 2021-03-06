import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Actions from "../../Root/Redux/Actions/Actions";

/*
  This component is for authorization
  Route : /auth/register
*/
function Register (){
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [handle, setHandle] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();

  const dispatch = useDispatch();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    setUser({
      uid: 2,
      name: name,
      email: email,
      password: password,
      handle: handle
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
          id="name"
          required
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
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
          id="handle"
          required
          placeholder="Handle Name"
          onChange={(e) => {
            setHandle(e.target.value);
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
      <div>{name}</div>
    </div>
  );
};

export default Register;
