import React from 'react';
import styled from 'styled-components';
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
import "./style/style.css";
import doclounge from "../PortfolioPage/doclounge.png"
import docloungeMobile  from "../PortfolioPage/docloungeMobile.png"


const CardsContainer = styled.div`
  display:flex;
  flex-direction:row;
  height:100%;
  max-width:100%;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color:#131417;
  color:#ffff;
`;

const BigTitle = styled.h1`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content:center;
  font-size: 2rem;
  height:120px;
  width:100%;
  background-color:#131417;
  color:#ffff;
  margin-top:20px;


  @media only screen and (max-width:390px) { 
    padding:1rem;
    opacity: 1;
    height:30px;
    margin-bottom:10px;
    margin-top:30px
    font-size: 1.5rem;
 };
`;


const Description = styled.h4`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content:center;
  font-size:.7rem;
  height:80px;
  width:100%;
  color:#ffff;
  margin-top:288px;
  background:#cfcace;
  color:black;
  padding:1rem;

  @media only screen and (max-width:390px) { 
    margin-top:182px;
    font-size:.5rem;
    height:50px;
    width:100%;
   
    
 };
`;



const Card1 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 600px;
    height:400px;
    margin: 20px 0;
    margin-bottom:10px;
    box-shadow: 2px 2px 10px 5px grey;
    cursor: pointer;
    background-color:#fff; 
    background-image:url(${FideleoCoverPhoto});
    font-size: 1.5rem;
    color:#ffff;

    @media only screen and (max-width:390px) { 
      width:400px;
      height:300px;
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
      opacity: 1;
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
    background-image:url(${AframeCoverPhoto});
    font-color: #ffff;
    font-size: 1.5rem;

    @media only screen and (max-width:390px) { 
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
    margin: 20px 0px;
    box-shadow: 2px 2px 10px 5px white;
    cursor: pointer;
    background-image:url(${CityTour});
    font-color: #ffff;
     
      @media only screen and (max-width:390px) { 
      display:flex;
      opacity: 1;
      height:250px;
      background-image:url(${CityTourMobile});
   };
`


const Card6 = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    flex-wrap: wrap;
    width: 600px;
    height:400px;
    margin: 20px 0px;
    box-shadow: 2px 2px 10px 5px white;
    cursor: pointer;
    background-image:url(${doclounge});
    font-color: #ffff;
     
      @media only screen and (max-width:390px) { 
      display:flex;
      opacity: 1;
      height:250px;
      background-image:url(${docloungeMobile});
   };
`


const GitHub = styled.div`
width:50%;
height:30px;
display: flex;
justify-content:center;
flex-wrap: wrap;
margin:auto;
text-color:#ffff;
font-size:1rem;
text-decoration:none;


&:hover {
  transform: scale(1.1);
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
      
          <Description>
            <h3> TECH: HTML, CSS, React, Node.js, MonggoDB, Express, Bootstrap, Figma  </h3>
          <GitHub>
          <a  class="linktoGithub" href="https://fidelio.netlify.app/" target="_blank"  rel="noreferrer"  > website</a>
          </GitHub>
  
          <GitHub>
          <a  class="linktoGithub" href="https://github.com/jintodas/ExploringCodeProject" target="_blank"  rel="noreferrer"  > Github</a>
          </GitHub>
          </Description>
        </Card1>


  <Card2>     
      <Description>
            <h3> TECH: HTML, CSS, React, Node.js, MonggoDB, Express, Bootstrap, Figma  </h3>
            <GitHub> pixart - going project</GitHub>
        <GitHub>
          <a class="linktoGithub" href="https://github.com/jintodas/Virtual-City-Tour" target="_blank"  rel="noreferrer" > Github</a>    
        </GitHub>
      </Description>
    </Card2>
        
        
     <Card3>
        <Description>
            <h3> HTML, CSS, Javascript,  Phaser 3  Tiled- Map editor,  Matter Physics,  Github,  Figma, GammaFP</h3>
            <GitHub>
               <a   class="linktoGithub" href="https://caves.netlify.app/"target="_blank"  rel="noreferrer" >Website</a>
            </GitHub>

            <GitHub>
               <a   class="linktoGithub" href="https://github.com/Harry-Yates/PhaserGame-RPG-Caves"target="_blank"  rel="noreferrer" >Github</a>
            </GitHub>
          </Description>
        </Card3>
        
        <Card4>
        <Description>
            <h3> TECH: HTML,CSS, Javascript,Three.js, Git, A-frame</h3>
            <GitHub>
               <a>Website</a>
            </GitHub>
            <GitHub>
              <a  class="linktoGithub" href="https://github.com/jintodas/ExploringCodeProject" target="_blank"  rel="noreferrer" >Github</a>
            </GitHub>
          </Description>
        </Card4>
        

    <Card5>
    <Description>
            <h3> TECH: HTML, CSS, Javascript, Git, GitHub, Figma, Bootstrap</h3>
            <GitHub>
               <a>Website</a>
            </GitHub>
            <GitHub>
              <a  class="linktoGithub" href="https://github.com/jintodas/Virtual-City-Tour" target="_blank"  rel="noreferrer" >Github</a>
            </GitHub>
          </Description>

        </Card5>


        <Card6>
        <Description>
            <h3> Brief: Doclounge Client Project conduccted with team for frontend developer at Hyper Island</h3>
          
            <GitHub>
              <a  class="linktoGithub" href="https://www.figma.com/proto/iuSYnZTeHErQv3yUJbrbQ1/DocLounge-VOD-%26-Hemma-Hos-MASTER?node-id=112%3A74&scaling=scale-down&page-id=0%3A1&starting-point-node-id=112%3A74&show-proto-sidebar=1" target="_blank"  rel="noreferrer" >Prototype</a>
            </GitHub>
          </Description>
        </Card6>
        </CardsContainer>
          
         </> 
    );
};