import React, { useEffect, useState } from "react";
import bgImg from "../../assets/images/login-bg.png";
import { useSignInMutation } from "../../context/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import "./login.scss";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../context/authSlice/authSlice";

const initialState = {
  UserName: "john32",
  password: "12345678",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const [signIn, { data, isError, isLoading, isSuccess, error }] =
    useSignInMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data?.data?.token));
      dispatch(setUser(data?.data?.user));
      navigate("/admin/manage-product");
    }
    if (isError) {
      alert(error.data.message);
    }
  }, [isSuccess, isError]);

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(formData);
  };

  return (
    <div className="login">
      <div className="container login__container">
        <form className="login__form" action="" onSubmit={handleLogin}>
          <h2>Log In</h2>
          <label className="login__form__label">
            Name
            <input
              name="UserName"
              value={formData.UserName}
              onChange={handleChange}
              className="login__form__name"
              type="text"
            />
          </label>
          <label className="login__form__label">
            E-mail
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="login__form__password"
              type="password"
            />
          </label>
          <button disabled={isLoading} className="login__btn">
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
