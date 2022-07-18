import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AframeCoverPhoto from "../PortfolioPage/Aframe.png"
import FideleoCoverPhoto from "../PortfolioPage/Fideleo.png"
import CityTour from "../PortfolioPage/CityTour.png"
import Phaser from "../PortfolioPage/Phaser.png"
import PhaserMobile from "../PortfolioPage/PhaserMobile.png"
import FideleoMobile from "../PortfolioPage/FideleoMobile.png"
import CityTourMobile from "../PortfolioPage/CityTourMobile.png"
import AframeMobile  from "../PortfolioPage/AframeMobile.png"
import pixart from "../PortfolioPage/pixart.png"
import pixartMobile from "../PortfolioPage/pixartMobile.png"


const CardsContainer = styled.div`
  display:flex;
  flex-direction:row;
  height:100%;
  max-width:100%;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color:#131417;
`;

const BigTitle = styled.h1`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content:center;
  font-size: 3rem;
  height:120px;
  width:100%;
  background-color:#131417;
  color:#ffff;
  margin-top:20px;
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
    color:#ffff;

    @media only screen and (max-width:390px) { 
      padding:1rem;
      opacity: 1;
      height:250px;
      background-image:url(${FideleoMobile});
   };
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
    font-size: 1.5rem;
    color:#ffff;
    background-image:url(${pixart});

    @media only screen and (max-width:390px) { 
      padding:1rem;
      opacity: 1;
      padding: 0 10px;
      height:250px;
      background-image:url(${pixartMobile});
   };

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
    color:#ffff;
    background-image:url(${Phaser});

    @media only screen and (max-width:390px) { 
      padding:1rem;
      opacity: 1;
      height:250px;
      background-image:url(${PhaserMobile});
   };
    
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

    @media only screen and (max-width:390px) { 
      padding:1rem;
      opacity: 1;
      height:250px;
      background-image:url(${AframeMobile});
   };
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
     
      @media only screen and (max-width:390px) { 
      display: flex;
      flex-wrap: wrap; 
      font-size:10px;
      padding:1rem;
      opacity: 1;
      height:250px;
      padding:0 10px;
      margin:10p 0;
      background-image:url(${CityTourMobile});
   };
`

const GitHub = styled.div`
width:100%;
display: flex;
justify-content:center;
flex-wrap: wrap;
align-item:bottom:
margin:auto;
color:white;

&:hover {
  transform: scale(1.1);
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s linear;
  line-height: .5rem;

}
`

export const PortfolioPage =() =>{
    return(
        <>
       
        <CardsContainer>
        <BigTitle>PROJECTS</BigTitle>

        <Card1>
          <h2> Ecommerce Website </h2>
          <GitHub>
          <a href="https://github.com/jintodas/ExploringCodeProject" target="_blank" rel="noreferrer"> Checkout the project inGithub</a>
          </GitHub>
        </Card1>

        <Card2>
          <h2> Pixart</h2>
          <h3></h3>
          <GitHub>
          <a href="https://github.com/jintodas/Virtual-City-Tour">Checkout project in Github</a>    
          </GitHub>
        </Card2>
        
        
        <Card3>
        <h1>Phaser Game</h1>
       <GitHub>
        <a href="https://github.com/Harry-Yates/PhaserGame-RPG-Caves"> Checkout project in Github</a>
       </GitHub>

        </Card3>
        
        <Card4>
          <h2>Shooting Game</h2>
          <GitHub>
          <a href="https://github.com/jintodas/ExploringCodeProject"> Checkout project in Github</a>
          </GitHub>
        </Card4>
        

        <Card5>
          <h2>City Tour</h2>
      
          <GitHub>
          <a href="https://github.com/jintodas/Virtual-City-Tour"> Checkout project in Github</a>
          </GitHub>
        </Card5>
        </CardsContainer>
        
       
   
          
         </> 
    );
};