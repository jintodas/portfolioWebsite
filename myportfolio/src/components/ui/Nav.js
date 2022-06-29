import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  background-color:#ffff;
  font-color:white;
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
`;

const Logo = styled.div`
  width: 60px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-items: center;
`;

const MenuItem = styled.div`
  font-size: 1.05rem;
  cursor: pointer;
  margin-left: 25px;
  color: black;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Nav = () => {
    return (
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>
              <img src={Image} className="w-100" alt="logo"></img>
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
         
            <Link
              to="PhotographyPage"
              style={{ color: "inherit", textDecoration: "inherit" }}>
              <MenuItem>Photography</MenuItem>
            </Link>
         
         {/* <MenuItem>Photography</MenuItem> */}
     
         <Link
              to="/categories"
              style={{ color: "inherit", textDecoration: "inherit" }}>
              <MenuItem>Contact</MenuItem>
            </Link>
  
          </Menu>
        </Center>
        <Right>
          
          <Link to="/ResumePage" style={{ textDecoration: "none" }}>
        
          <MenuItem>CV</MenuItem>
          
          </Link>
          <Link to="/accountpage" style={{ textDecoration: "none" }}>
          <MenuItem>Github</MenuItem>
          </Link>
  
          <Link to="/cart" style={{ textDecoration: "none" }}>
          <MenuItem>LinkedIn</MenuItem>
          </Link>
          
        </Right>
      </Wrapper>
    );
  };
  
  export default Nav;