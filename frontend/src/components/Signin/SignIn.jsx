import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const SignIn = () => {
  return (
    <form className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <FontAwesomeIcon icon={faUser} className='field-icon'/>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faLock} className='field-icon'/>
        <input type="password" placeholder="Password" />
      </div>
      <input type="submit" value="Login" className="btn solid" />
    </form>
  );
};

export default SignIn;
