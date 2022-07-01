import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #F0F5F9;
  height: 100vh;
`;

export const LoginTitle = styled.h1`
  font-family: 'Arima', cursive;
  margin-top: -20px;
  color: #FC6011;
  text-align: center;
`;

export const LoginForm = styled.form`
  margin-top: 20px;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const LoginLabel = styled.label`

`;

export const LoginInput = styled.input`
  height: 40px;
  width: 70vw;
  border-radius: 15px;
  border: 1px solid #FC6011;
  text-align: center;
`;

export const LogoImg = styled.img`
  margin: 0 auto;
  width: 200px;
`;

export const LoginButton = styled.button`
  background-color: #FC6011; 
  height: 40px;
  width: 71vw;
  font-weight: bold;
  font-size: 20px;
  border-radius: 15px;
  color: #F0F5F9;
`;
