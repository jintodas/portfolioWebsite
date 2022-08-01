import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Wrapper = styled.div`
  height:80px;
  display: flex;
  width:100%;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  background-color:none;
  @media only screen and (max-width: 481px) {
    padding: 0px;
    margin:10px 10px ;
  }
`;
const Left = styled.div``;

const Menu = styled.div`
  display: flex;
  list-style: none;
  z-index: 10;
  padding:0 10px;
  margin:10px 10px;
  color:white;

  &:hover {
    transform: scale(1.1);
    text-decoration: none;
    font-weight: 600;
    transition: 0.2s linear;
    line-height: .5rem;
  }:

  @media only screen and (max-width: 390px) {
    margin:10px 10px;
  }:

  
`;

const Logo = styled.div`
  width: 60px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-items: center;
  margin-left:50px;
  &:hover {
    transform: scale(1.1);
    text-decoration: none;
    font-weight: 600;
    transition: 0.2s linear;
    line-height: .5rem;
  }

`;
  
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-items:space-between;
  justify-content:pace-between;

  @media only screen and (max-width: 390px) {
    margin:0px 0px;
  }:


`;


const Nav = () => {
    return (
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>
              <img src="images/logo.jpg" className="w-100" alt="home"></img>
            </Logo>
          </Link>
        </Left>
       
        <Right>
       <Menu>  
       <Link to="/ResumePage" style={{ textDecoration: "none" }}>
          <img
            src="./images/cv.png"
            alt="Linkedin "
            className="icon"
             />
          </Link>
          </Menu>
          <Menu>  
          <a
          href="https://www.linkedin.com/in/jintodas"
          target="_blank"
           rel="noreferrer"
            >
          <img
            src="./images/Linkedin.png"
            alt="Linkedin "
            className="icon"
             />
            </a></Menu>
     
 
          
          <Menu>
          <a href="https://github.com/jintodas" target="_blank" rel="noreferrer">
           <img
             src="./images/github.PNG"
             alt="github"
             className="tech-icon"
            />
          </a>
          </Menu>   


                 
          <Menu>
        <a href="https://www.flickr.com/photos/75216710@N08/albums" target="_blank" rel="noreferrer">
           <img
             src="./images/camera.png"
             alt="flickr"
             className="tech-icon"
            />
          </a>
      </Menu>     

        </Right>
      </Wrapper>
    );
  };
  
  export default Nav;