import React, { useState } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleSignup = (user) => {
    setUsers([...users, user]);
  };

  const handleLogin = (credentials) => {
    const foundUser = users.find(
      (user) =>
        user.username === credentials.username && user.password === credentials.password
    );
    if (foundUser) {
      alert('Login successful!');
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <div className="container">
      <div className="card">
        {isLoginForm ? (
          <>
            <LoginForm onLogin={handleLogin} />
            <button className="toggle-button" onClick={() => setIsLoginForm(false)}>
              Don't have an account? Sign up
            </button>
          </>
        ) : (
          <>
            <SignupForm onSignup={handleSignup} />
            <button className="toggle-button" onClick={() => setIsLoginForm(true)}>
              Already have an account? Log in
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
