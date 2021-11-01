import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';



const Login = () => {
    const { user, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">

            {
                !user.email ? <div>
                    <h2>Login</h2>
                    <form>
                        <input type="email" name="" id="" placeholder="Your Email" />
                        <br />
                        <input type="password" name="" id="" />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                    <p>new to here <Link to='/register'> Create Account</Link> </p>
                    <div>--------or--------</div>
                    <button
                        className='btn-regular'
                        onClick={handleGoogleLogin}
                    >Google Sign In</button>
                </div> : <div>
                    <h2>Welcome {user.displayName}</h2>
                    <img src={user.photoURL} alt="" />
                </div>
            }


        </div>
    );
};

export default Login;