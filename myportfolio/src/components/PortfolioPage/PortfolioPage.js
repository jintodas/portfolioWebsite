import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PortfolioPhoto from "../LandingPage/photo12.png"
import AframeCoverPhoto from "../PortfolioPage/Aframe.png"
import FideleoCoverPhoto from "../PortfolioPage/Fideleo.png"

const CardsContainer = styled.div`
  display:flex;
  flex-direction:row;
  height:1200px;
  width:100%;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color:#0d0d0d;
  // background-image:url(${PortfolioPhoto});
`;
const linkStyle = {
  textDecoration: "none",
};
const BigTitle = styled.h1`
  disålay:flex;
  alingn-item:center;
  text-align: center;
  font-size: 4rem;
  text-color: white;
  color:white;
  height:100px;
  width:100%;
  background-color:#0d0d0d;
  color:#ffff;
`;

const Button = styled.button`
  font-size: 1.8rem;
  background: none;
  border: none;
  cursor: pointer;
  padding-left: 50px;
`;


const Card1 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 700px;
    height:400px;
    margin: 20px 0;
    box-shadow: 2px 2px 10px 5px grey;
    cursor: pointer;
    background-color:#fff; 
    background-image:url(${FideleoCoverPhoto});
    font-size: 2rem;
`

const Card2 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 700px;
    height:400px;
    margin: 20px 0;
    box-shadow: 2px 2px 10px 5px grey;
    cursor: pointer;
    background-color:#fff;
    font-size: 2rem;
`

const Card3 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 700px;
    height:400px;
    margin: 20px 0;
    box-shadow: 2px 2px 10px 5px grey;
    cursor: pointer;
    background-color:#fff; 
    font-size: 2rem; 
`

const Card4 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 700px;
    height:400px;
    margin: 20px 0;
    box-shadow: 2px 2px 10px 5px grey;
    cursor: pointer;
    background-color:#fff;
    background-image:url(${AframeCoverPhoto});
    font-color: #ffff;
    font-size: 2rem;
`

export const PortfolioPage =() =>{
    return(
        <>
       
     
        <CardsContainer>
        <BigTitle>Projects</BigTitle>
        <Card1>
          <h2> Fideleo- Ecommerce Project</h2>
        </Card1>

        <Card2>
          <h2> Pixart</h2>
        </Card2>
        <Card3>
          <h2> Phaser Game</h2>
        </Card3>
        
        <Card4>
          <h2> Aframe Shooting Game</h2>
        </Card4>
        
        </CardsContainer>
        
       
   
          
         </> 
    );
};