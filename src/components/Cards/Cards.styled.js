import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90vw;
  height: 120px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 2px 2px 5px grey;
`;

export const CardImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  margin-left: 20px;
`;

export const FoodName = styled.p`
  font-size: 20px;
  color: #11263C;
  margin: 0 auto;
  font-weight: bold;
  text-align: center;
`;

export const FoodLink = styled(Link)`
  text-decoration: none;
  color: #11263C;
`;
