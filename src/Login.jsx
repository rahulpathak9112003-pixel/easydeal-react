
import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <div className="login-logo">🛍️</div>

          <h1>
            {isSignup ? "Create Account" : "Welcome Back"}
          </h1>

          <p>
            {isSignup
              ? "Create your EasyDeal account"
              : "Login to your EasyDeal account"}
          </p>
        </div>

        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();

            if (isSignup) {
              alert("Account created successfully!");
            } else {
              alert("Login successful!");
            }
          }}
        >

          {isSignup && (
            <div className="login-input-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
              />
            </div>
          )}

          <div className="login-input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {isSignup && (
            <div className="login-input-group">
              <label>Mobile Number</label>

              <input
                type="tel"
                placeholder="Enter your mobile number"
                required
              />
            </div>
          )}

          <div className="login-input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder={
                isSignup
                  ? "Create a password"
                  : "Enter your password"
              }
              required
            />
          </div>

          {isSignup && (
            <div className="login-input-group">
              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm your password"
                required
              />
            </div>
          )}

          {!isSignup && (
            <div className="login-options">

              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Forgot Password?
              </a>

            </div>
          )}

          <button
            type="submit"
            className="login-button"
          >
            {isSignup ? "Create Account" : "Login"}
          </button>

        </form>

        <div className="login-divider">
          <span>OR</span>
        </div>

        <p className="signup-text">

          {isSignup
            ? "Already have an account?"
            : "Don't have an account?"}

          <button
            type="button"
            className="switch-auth-button"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? " Login" : " Create Account"}
          </button>

        </p>

      </div>
    </div>
  );
}

export default Login;


