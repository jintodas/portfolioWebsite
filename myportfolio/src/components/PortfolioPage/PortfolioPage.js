import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from '../ui/Nav'

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const linkStyle = {
  textDecoration: "none",
  color: "black"
};
const BigTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  padding: 30px 0;
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
        <Nav/>
          <BigTitle>Projects</BigTitle>
          <Button>FILTER</Button>
         </> 
    );
};