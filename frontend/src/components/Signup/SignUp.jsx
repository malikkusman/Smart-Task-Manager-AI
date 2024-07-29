import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
  return (
    <form className="sign-up-form">
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <FontAwesomeIcon icon={faUser} className='field-icon'/>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faEnvelope} className='field-icon'/>
        <input type="email" placeholder="Email" />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faLock} className='field-icon'/>
        <input type="password" placeholder="Password" />
      </div>
      <input type="submit" className="btn" value="Sign up" />
     
    </form>
  );
};

export default SignUp;