import Login from "./index"
import Home from "../Home/index"
import { useContext } from "react";
import LoginContext from '../../Context/UserContext/Login';

function LoginSuccessful() {

  const loginState = useContext(LoginContext);
  
  return (
    <div >
      {loginState.userIsLoggedIn === true ?
      <Home/> : 
      <Login/>}
    </div>
  );
}
export default LoginSuccessful;