import React from "react";
import "./Login.css";
import {auth} from '../../firebase';

function Login() {
   const signIn = () => {};

   return (
      <div className="login">
         <div className="login__logo">
            <img
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
               alt=""
            />
            <img
               src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
               alt=""
            />
         </div>
         <button className="login__button" type="submit" onClick={signIn}>
            Sign In
         </button>
      </div>
   );
}

export default Login;
