import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height:100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#131417;;
  font-color:white;

  font-size:1rem;
  color:white;

  @media only screen and (max-width: 380px) {
    padding: 0px 10px;
    font-size:1rem;

  };
`;

const Left = styled.div`
@media only screen and (max-width: 380px) {
  padding: 0px 10px;
  font-size:.7rem;

};
`;

const Center = styled.div`
  text-align: center;

  @media only screen and (max-width: 380px) {
    padding: 0px 10px;
    font-size:.5rem;
  
  };
  
`;

const Menu = styled.div`
  display: flex;
  list-style: none;
  z-index: 10;
  margin-right:10px;
  font-size:.7rem;
  @media only screen and (max-width: 380px) {
    padding: 0px 10px;
    font-size:.5rem;
  
  };
  &:hover {
    transform: scale(1.1);
    text-decoration: none;
    font-weight: 600;
    transition: 0.2s linear;
    line-height: .5rem;
  }
`;

const Logo = styled.div`
  width: 50px;
  height: 40px;
  margin-left:30px;
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
  margin-left: 10px;
  font-size:.7rem;
  background-color:#131417;;
  font-color:white;
  margin-right:20px;
  @media only screen and (max-width: 380px) {
    padding:1rem;
    font-size:.5rem;
  
  };
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 380px) {
    padding: 0px 10px;
    font-size:.5rem;
  
  };

`;

const Footer = () => {
    return (
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>
              <img src="./images/logo.png" className="w-100" alt="Home"></img>
            </Logo>
          </Link>
        </Left>
        <Center>
        <Menu>
            <ul><h4>Contact</h4>
                <p> Jinto L. Das</p>
                <p> jinto.laldas@hyperisland.se</p>
                <p>+(46) 0707670583</p>
              </ul>
      
              </Menu>
        </Center>
        <Right>
           
           
          {/* <Menu>
          <a href="https://github.com/jintodas" target="_blank" rel="noreferrer">
           <img
             src="./images/github.jpg"
             alt="github"
             className="tech-icon"
            />
          </a>
          </Menu> */}
         

          {/* <Menu>  
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
          */}
{/*         
          <Menu>
        <a href="https://www.flickr.com/photos/75216710@N08/albums" target="_blank" rel="noreferrer">
           <img
             src="./images/flickr.png"
             alt="flickr"
             className="tech-icon"
            />
          </a>
      </Menu> */}

      {/* <Menu>
        <a href="https://www.instagram.com/pixart.se/" target="_blank" rel="noreferrer">
           <img
             src="./images/Instagram.png"
             alt="flickr"
             className="tech-icon"
            />
          </a>
      </Menu> */}

          <MenuItem>Copy-Right @ Jinto L. Das, 2022</MenuItem>
        
       
          
        </Right>
      </Wrapper>
    );
  };
  
  export default Footer;