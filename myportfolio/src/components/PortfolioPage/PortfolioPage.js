import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PortfolioPhoto from "../LandingPage/photo7.jpg"

const CardsContainer = styled.div`
  display: flex;

  flex-direction:row;
  height:1000px;
  width:100%;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top:100px;
  background-image:url(${PortfolioPhoto});
`;
const linkStyle = {
  textDecoration: "none",
};
const BigTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  padding: 30px 0;
  text-color:#ffff;
`;

const Button = styled.button`
  font-size: 1.8rem;
  background: none;
  border: none;
  cursor: pointer;
  padding-left: 50px;
`;

const Div = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
width:100%;
padding: 10px;
`
export const PortfolioPage =() =>{
    return(
        <>
        <CardsContainer>
        <BigTitle>Projects</BigTitle>
        </CardsContainer>
          
         </> 
    );
};