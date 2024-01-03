import React from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import CustomNavbar from "../components/layout/CustomNavbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  logout, setUser } from "../store/slices/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import requestObject from "../api/apiInstance";
import { useEffect } from "react";
import Layout from "./shared/Layout";

const Home = () => {
  const { loggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = async () => {
      try {
        const data = localStorage.getItem("access_token");
        const response = await axios.get(
          "http://127.0.0.1:8000/api/user-details/",
          {
            headers: {
              Authorization: `Bearer ${data}`,
            },
          }
        );

        const newData = response.data;
        dispatch(setUser(newData));
      } catch (error) {
        console.error("failed");
      }
    };
    userDetails();
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="App">
      {loggedIn ? (
        <div>
          <Layout></Layout>
        </div>
      ) : (
        <div>
          <p>You are not logged in </p>
          <Link to="/">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
