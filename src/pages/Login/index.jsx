import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  LoginForm,
  LoginContainer,
  LoginButton,
  LoginInput,
  LoginLabel,
  LogoImg } from './Login.styled';

import GlobalStyle from '../../style/GlobalStyle';

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
    <>
      <GlobalStyle />
      <LoginContainer className="Login">
        <LogoImg
          src="https://img.icons8.com/external-flaticons-flat-flat-icons/256/000000/external-recipe-book-foodies-flaticons-flat-flat-icons.png"
          alt="recipe"
        />
        <LoginForm>
          <LoginLabel htmlFor="email">
            <LoginInput
              type="email"
              id="email"
              placeholder="Email"
              data-testid="email-input"
              onChange={ handleEmail }
            />
          </LoginLabel>
          <LoginLabel htmlFor="password">
            <LoginInput
              type="password"
              id="password"
              placeholder="Password"
              data-testid="password-input"
              onChange={ handlePassword }
            />
          </LoginLabel>
          <LoginButton
            type="button"
            data-testid="login-submit-btn"
            disabled={ buttonValidation() }
            onClick={ saveTokens }
          >
            Enter
          </LoginButton>
        </LoginForm>
      </LoginContainer>
    </>
  );
}

export default Login;
