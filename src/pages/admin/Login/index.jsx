import React from 'react';
import './style.css';
import loginimg from '../../../assets/loginimg.png';

function Login() {
    return (
        <div className="login-container">
            <div className="login-image">
                <img src={loginimg} alt="Cars" />
            </div>
            <div className="login-form">
                <h2>Welcome, Admin BCR</h2>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Contoh: johndee@gmail.com" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="6+ karakter" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
