import React from "react";
import bgImg from "../../assets/images/login-bg.png";

import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="container login__container">
        <form className="login__form" action="">
          <h2>Log In</h2>

          <label className="login__form__label">
            Name
            <input className="login__form__name" type="text" />
          </label>
          <label className="login__form__label">
            E-mail
            <input className="login__form__password" type="password" />
          </label>
          <button className="login__btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
