import React from "react";
import styled from "styled-components";
import { MainPage } from "./MainPage";
import { About } from "../About/About";
import {PortfolioPage} from "../PortfolioPage/PortfolioPage"
import Footer from "../ui/footer"
import {ResumePage} from "../CV/ResumePage"

const Container = styled.div`
  overflow: hidden;
  background-color:white;
  width:100%;
  border:none;
`;

export const LandingPage =() =>{
  return (
    <Container>
      <MainPage/>
      <PortfolioPage/>
      <About/>
      <ResumePage/>
      <Footer/>
    </Container>
  );
};