import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RequestResetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/user/forgot-password/", {
        email,
      });
      setEmailSent(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const ForgotPassword = () => {
    return (
      <>
        <form onSubmit={handleForgotPassword}>
          <h3 className="text-center mb-3">Forgot Password</h3>
          <div className="mb-2">
            <label htmlFor="email" className="form-label mb-2">
              Enter Your Email
            </label>
            <input
              type="text"
              placeholder="enter email"
              className="form-control"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" text-center small d-grid mt-2">
            <button className="btn btn-primary">Reset Password</button>
          </div>
        </form>
        <p className="text-end mt-3">
          <Link to="/" className="ms-2">
            Go back to Login
          </Link>
        </p>
      </>
    );
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 primary-bg">
      <div className="form_container p-5 rounded bg-white">
        {emailSent ? (
          <p className="fw-normal blockquote text-success">
            Password reset instructions sent to your email. If you haven't
            received the email, click here to resend email.
          </p>
        ) : (
          <ForgotPassword />
        )}
      </div>
    </div>
  );
};

export default RequestResetPassword;