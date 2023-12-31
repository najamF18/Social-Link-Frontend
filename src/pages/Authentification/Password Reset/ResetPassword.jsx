import axios from "axios";
import React, { useState } from "react";
import { Link  } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleResetPassword = async () => {
    try {
      const token = window.location.pathname.split("/")[2];
      console.log(token);
      const url = `http://127.0.0.1:8000/api/reset-password/${token}/`;
      console.log(url);
      const response = await axios.post(
        url,
        { password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { data } = response;
      console.log(data);
      setResetSuccess(true);
    } catch (error) {
      // Handle error
      console.error("Password reset failed", error);

      // Update state with error message
      setError("Password reset failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="login template d-flex justify-content-center align-items-center vh-100 primary-bg">
        <div className="form_container p-5 rounded bg-white">
          {resetSuccess ? (
            <>
              <p className="text-success fw-bold blockquote">
                Password reset successfully! You can now log in with your new
                password.
              </p>
              <p className="text-center mt-3">
                <Link to="/" className="ms-2">
                  Click here to Login
                </Link>
              </p>
            </>
          ) : (
            <>
              <h3 className="text-center mb-3">Forgot Password</h3>
              {error && (
                <p className="text-danger fw-normal blockquote">{error}</p>
              )}
              <div className="mb-2">
                <label htmlFor="email" className="form-label mb-2">
                  New Password:
                </label>
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label mb-2">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  className="form-control"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className=" text-center small d-grid mt-2">
                <button
                  onClick={handleResetPassword}
                  className="btn btn-primary"
                >
                  Reset Password
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
