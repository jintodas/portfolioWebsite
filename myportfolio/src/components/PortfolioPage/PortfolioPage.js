import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PortfolioPhoto from "../LandingPage/photo12.png"
import AframeCoverPhoto from "../PortfolioPage/Aframe.png"
import FideleoCoverPhoto from "../PortfolioPage/Fideleo.png"
import CityTour from "../PortfolioPage/CityTour.png"


const CardsContainer = styled.div`
  display:flex;
  flex-direction:row;
  height:100%;
  max-width:100%;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color:#020d36;
`;

const BigTitle = styled.h1`
  display:flex;
  flex-direction:row;
  justify-content:center;
  font-size: 3rem;
  height:100px;
  width:100%;
  background-color:#ffff;
 // background-color:#064636;
 color:black;
`;

const Card1 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 600px;
    height:400px;
    margin: 20px 0;
    box-shadow: 2px 2px 10px 5px grey;
    cursor: pointer;
    background-color:#fff; 
    background-image:url(${FideleoCoverPhoto});
    font-size: 1.5rem;
`

const Card2 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 600px;
    height:400px;
    margin: 20px 0;
    box-shadow: 2px 2px 10px 5px white;
    cursor: pointer;
    background-color:none;
    font-size: 1.5rem;
    color:white;
`

const Card3 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 600px;
    height:400px;
    margin: 20px 0;
    box-shadow: 2px 2px 10px 5px white;
    cursor: pointer;
    font-size: 1.5rem; 
    color:white;
    
`

const Card4 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 600px;
    height:400px;
    margin: 20px 0;
    box-shadow: 2px 2px 10px 5px white;
    cursor: pointer;
    background-color:#fff;
    background-image:url(${AframeCoverPhoto});
    font-color: #ffff;
    font-size: 1.5rem;
`
const Card5 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 600px;
    height:400px;
    margin: 20px 0;
    box-shadow: 2px 2px 10px 5px white;
    cursor: pointer;
    background-color:#fff;
    background-image:url(${CityTour});
    font-color: #ffff;
    font-size: 1.5rem;
`

export const PortfolioPage =() =>{
    return(
        <>
       
     
        <CardsContainer>
        <BigTitle>PROJECTS</BigTitle>


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
        

        <Card5>
          <h2>City Tour</h2>
        </Card5>
        </CardsContainer>
        
       
   
          
         </> 
    );
};