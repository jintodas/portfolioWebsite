import React from "react";
import styled from "styled-components";
import Nav from "../ui/Nav";
import { MainPage } from "./MainPage";
import {PortfolioPage} from "../PortfolioPage/PortfolioPage"

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  background-color: white;
`;

export const LandingPage =() =>{
  return (
    <Container>
      <Nav />
      <MainPage/>
      <PortfolioPage/>
    </Container>
  );
};