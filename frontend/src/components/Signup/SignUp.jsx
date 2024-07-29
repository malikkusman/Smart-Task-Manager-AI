import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <form className="sign-up-form">
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <FontAwesomeIcon icon={faUser} />
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faEnvelope} />
        <input type="email" placeholder="Email" />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faLock} />
        <input type="password" placeholder="Password" />
      </div>
      <input type="submit" className="btn" value="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
      <div className="social-media">
        <Link href="#" className="social-icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link href="#" className="social-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link href="#" className="social-icon">
          <FontAwesomeIcon icon={faGoogle} />
        </Link>
        <Link href="#" className="social-icon">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
