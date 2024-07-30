import React, { useState } from "react";
import { signup } from "../api"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signup({
        username,
        email,
        password,
      });
      console.log(response.data);
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("There was an error signing up!", error);
    }
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <FontAwesomeIcon icon={faUser} className="field-icon" />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faEnvelope} className="field-icon" />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faLock} className="field-icon" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input type="submit" className="btn" value="Sign up" />
    </form>
  );
};

export default SignUp;
