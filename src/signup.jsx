import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { login, logout, setUser } from "./store/slices/auth";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const count = useSelector((state) => state.auth.value)
  const dispatch = useDispatch()
  const navigation=useNavigate()
  const [user, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setUserData({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const [error, setError] = useState(null);
  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      if (user.password !== user.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      // Make the POST request to the Django backend
      const response = await axios.post(
        "http://localhost:8000/signup/", // Replace with your Django backend URL
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data
      dispatch(login());
      dispatch(setUser(data.user));
      navigation('/home');
      localStorage.clear();
      localStorage.setItem("access_token", data.access);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data["access"]}`;
      // window.location.href = "/home"; // Handle the response as needed
    } catch (error) {
      console.error("Error submitting the form:", error);
      setError(error.response.data.email[0])
    }
  };

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">
        <form onSubmit={handleSignUp}>
          <h3 className="text-center">Sign Up</h3>
          <div className="mb-2">
            <label htmlFor="fname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="form-control"
              name="fname"
              required
              id="fname"
              onChange={handleChange}
              value={user.fname}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="lname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="form-control"
              name="lname"
              required
              id="lname"
              onChange={handleChange}
              value={user.lname}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              placeholder="enter email"
              className="form-control"
              name="email"
              required
              id="email"
              value={user.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="Password" className="form-label">
              enter Password
            </label>
            <input
              type="password"
              placeholder="*****"
              className="form-control"
              name="password"
              required
              id="password"
              value={user.password}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="confirmPassword" className="form-label">
              confirm Password
            </label>
            <input
              type="password"
              placeholder=""
              className="form-control"
              name="confirmPassword"
              required
              id="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
            ></input>
          </div>
          <div className="d-grid mt-2">
            <button className="btn btn-primary">Sign Up</button>
          </div>
          {error && <p className="text-danger mt-2">{error}</p>}
          <p className="text-end mt-2 ">
            Already Registered?
            <Link to="/" className="ms-2">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
