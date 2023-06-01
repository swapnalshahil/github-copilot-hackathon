
import React from 'react';
import useAuth from '../hooks/useAuth';

function Login() {
    const [user, login, logout] = useAuth();
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {user ? (
                <div>
                    <img src={user.picture} alt="user profile" />
                    <h3>User Logged in</h3>
                    <p>Name: {user.name}</p>
                    <p>Email Address: {user.email}</p>
                    <br />
                    <br />
                    <button onClick={logout}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
            )}
        </div>
    );
}
export default Login;