import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Actions from "../../Root/Redux/Actions/Actions";

/*
  This component is for authorization
  Route : /auth/Login
*/
function Login (){
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();

  const dispatch = useDispatch();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    setUser({
      name: name,
      password: password,
    });
  };

  useEffect(() => {
    dispatch({ type: Actions.UserActions.GET_ONE_USER_FROM_DB, payload: user });
  }, [dispatch]);

  return (
    <div className="Login">
      <h1>Login</h1>
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
          type="password"
          id="password"
          required
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Login</button>
      </form>
      <div>{name}</div>
    </div>
  );
};

export default Login;
