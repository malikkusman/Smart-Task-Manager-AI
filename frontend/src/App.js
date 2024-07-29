import React, { useState } from 'react';

import SignUp from './components/Signup/SignUp';
import SignIn from './components/Signin/SignIn';
import './App.css';
import RegisterLogo from "./assets/register.svg";
import logo from "./assets/log.svg";

function App() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {isSignUpMode ? <SignUp /> : <SignIn />}
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={() => setIsSignUpMode(true)}>
              Sign up
            </button>
          </div>
          <img src={logo} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={() => setIsSignUpMode(false)}>
              Sign in
            </button>
          </div>
          <img src={RegisterLogo} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
