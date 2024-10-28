import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';

const LoginForm = () => {
    const [passwordType, setPasswordType] = useState('password');
    const [showText, setShowText] = useState('SHOW');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            setShowText('HIDE');
        } else {
            setPasswordType('password');
            setShowText('SHOW');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your authentication logic here
        navigate('/home'); // Redirects to the homepage
    };

    return (
        <div className="container">
            <header>Login Form</header>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input type="text" required />
                    <label>Email or Username</label>
                </div>
                <div className="input-field">
                    <input className="pswrd" type={passwordType} required />
                    <span className="show" onClick={togglePasswordVisibility}>{showText}</span>
                    <label>Password</label>
                </div>
                <div className="button">
                    <div className="inner"></div>
                    <button type="submit">LOGIN</button>
                </div>
            </form>
            <div className="auth">Or Login with</div>
            <div className="links">
                <div className="facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    <span>Facebook</span>
                </div>
                <div className="google">
                    <FontAwesomeIcon icon={faGooglePlusSquare} />
                    <span>Google</span>
                </div>    
            </div>
            <div className="signup">
                Not a Member? <a href="#">Signup Now</a>
            </div>
        </div>
    );
};

export default LoginForm;
