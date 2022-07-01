import styled from 'styled-components';

export const MainDetailsDiv = styled.div`
  background-color: #F9C2A4;
  overflow: hidden;
`;

export const SectionContainer = styled.div`
  background-color: #F0F5F9;
  margin-top: 75px;
  border-radius: 50px 0 0 0;
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  float: right;
  overflow-x: hidden;
`;

export const DetailsImage = styled.img`
  width: 230px;
  height: 230px;
  margin-right: -50px;
  margin-top: -45px;
  border-radius: 50%;
  box-shadow: 20px 20px 20px 5px lightgray;
  
`;

export const ButtonDetails = styled.button`
  position: relative;
  border: none;
  background-color: #F0F5F9;
  height: 50px;
  width: 15px;
  margin-top: 10px;
  margin-left: 35px;
`;

export const ButtonImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const LinkCopied = styled.p`
  color: #FC6011;
  margin-left: 22px;
  margin-top: -6px;
  font-size: 12px;
`;

export const DetailsTitle = styled.h1`
  margin-left: 40px;
  width: 160px;
`;

export const RecipeCategory = styled.p`
  margin-top: -10px;
  margin-left: 40px;
  font-size: 20px;
  color: #FC6011;
`;

export const Ingredients = styled.p`
  margin-left: 40px;
  font-weight: bold;
`;

export const Instructions = styled.p`
  width: 80vw;
  margin: 0 auto;
  margin-top: 40px;
  text-align: center;
  background-color: #F9C2A4;
  padding: 15px;
  border-radius: 20px;
`;

export const StartButton = styled.button`
  font-size: 20px;
  margin-left: 33vw;
  border: none;
  box-shadow: 2px 2px 5px black;
  border-radius: 15px;
`;

export const StartContainer = styled.footer`
  overflow-x: hidden;
`;
