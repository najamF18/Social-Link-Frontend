import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from "./store/slices/auth";
import { useNavigate } from "react-router-dom";
function LogIn() {
  const count = useSelector((state) => state.auth.value)
  const dispatch = useDispatch()
  const navigation=useNavigate()

  const [user, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUserData({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const { data } = await axios.post("http://localhost:8000/token/", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.clear();
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    console.log(data)
    dispatch(login())
    navigation('/home');
    axios.defaults.headers.common["Authorization"] = `Bearer ${data["access"]}`;
    
    /*const { response } = await axios.get(
      "http://127.0.0.1:8000/api/user-details/",
      {
        headers: {
          Authorization: `Bearer ${data.access}`,
        },
      }
    );
    console.log(response);
    */

    // window.location.href = "/home";
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">
        <form onSubmit={handleSubmit} method="post">
          <h3 className="text-center">LogIn</h3>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              placeholder="enter email"
              className="form-control"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="enter password"
              className="form-control"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            ></input>
          </div>

          <div className="d-grid mt-2">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-center mb-3">
            <Link to="/forgotpassword">Forgot password?</Link>
          </p>
          <p className="text-center mb-4">
            Don't have an account?
            <Link to="/signup" className="ms-2">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
