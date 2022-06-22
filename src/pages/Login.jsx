import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = ({ target }) => {
    setEmail(target.value.toLowerCase());
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value.toLowerCase());
  };

  const buttonValidation = () => {
    const val = /\S+@\S+\.\S+/;
    const validationEmail = val.test(email);
    const seis = 6;
    return !(validationEmail && password.length > seis);
  };

  const saveTokens = () => {
    const userEmail = 'email';
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ [userEmail]: email }));
    history.push('/foods');
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <form>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            placeholder="Email"
            data-testid="email-input"
            onChange={ handleEmail }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            placeholder="Password"
            data-testid="password-input"
            onChange={ handlePassword }
          />
        </label>
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ buttonValidation() }
          onClick={ saveTokens }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
