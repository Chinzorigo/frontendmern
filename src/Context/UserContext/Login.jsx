import React, { useState } from "react";
import axios from 'axios';

const LoginContextCreate = React.createContext();

export const LoginContext = (props) => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState("");
  
  const login = (email, password) => {
    axios
      // .post(`http://localhost:8000/api/login/check`, {
      .post(`https://ecommerce4showcase-api.onrender.com/api/login/check`, {
        username: email,
        password: password,
      })
      .then((result) => {
        setUserIsLoggedIn(true);
        setLoggedUser(result.data.data.username)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  

  return (
    <LoginContextCreate.Provider
      value={{
        loggedUser,
        userIsLoggedIn,
        login
      }}
    >
      {props.children}
    </LoginContextCreate.Provider>
  );
};

export default LoginContextCreate;
