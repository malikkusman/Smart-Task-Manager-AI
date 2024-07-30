import React, { useState } from 'react';
import { login } from "../api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login({
        email,
        password,
      });
      console.log(response.data);
      setEmail('');
      setPassword('');
      
    } catch (error) {
      setError('Invalid credentials, please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <h2 className="title">Sign in</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="input-field">
        <FontAwesomeIcon icon={faEnvelope} className='field-icon'/>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faLock} className='field-icon'/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input type="submit" value="Login" className="btn solid" />
    </form>
  );
};

export default SignIn;
