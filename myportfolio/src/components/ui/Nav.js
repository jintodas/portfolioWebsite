import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Wrapper = styled.div`
  height:80px;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  background-color:#ffff;
  font-color:white;
  margin:0 0px ;
  @media only screen and (max-width: 380px) {
    padding: 10px 10px;
  }
`;
const Left = styled.div``;
const Center = styled.div`
  text-align: center;
`;

const Menu = styled.div`
  display: flex;
  list-style: none;
  z-index: 10;
  padding:0 10px;

  &:hover {
    transform: scale(1.1);
    text-decoration: none;
    font-weight: 600;
    transition: 0.2s linear;
    line-height: .5rem;
  }

  
`;

const Logo = styled.div`
  width: 60px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-items: center;
  &:hover {
    transform: scale(1.1);
    text-decoration: none;
    font-weight: 600;
    transition: 0.2s linear;
    line-height: .5rem;
  }

`;

const MenuItem = styled.div`
  font-size: 1.05rem;
  cursor: pointer;
  margin-left: 25px;
  color: black;

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


`;


const Nav = () => {
    return (
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>
              <img src="images/logo.png" className="w-100" alt="home"></img>
            </Logo>
          </Link>
        </Left>
        <Center>
          <Menu>
            <Link
              to="/PortfolioPage"
              style={{ color: "inherit", textDecoration: "inherit" }}>
              <MenuItem>Portfolio</MenuItem>
            </Link>

            <Link to="/ResumePage" style={{ textDecoration: "none" }}>
          <MenuItem>CV</MenuItem>
          </Link>
  
          </Menu>
        </Center>
        <Right>
          
        
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
             src="./images/github.jpg"
             alt="github"
             className="tech-icon"
            />
          </a>
          </Menu>   


                 
          <Menu>
        <a href="https://www.flickr.com/photos/75216710@N08/albums" target="_blank" rel="noreferrer">
           <img
             src="./images/photography.png"
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