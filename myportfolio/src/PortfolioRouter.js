import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResumePage } from "./components/CV/ResumePage";
import { LandingPage } from "./components/LandingPage/LandingPage";
import {MainPage } from "./components/LandingPage/MainPage";
import{PortfolioPage} from "./components/PortfolioPage/PortfolioPage";
import{SinglePortfolioPage} from "./components/SinglePortfolioPage/SinglePortfolioPage";
import Footer from "./components/ui/footer";
import {PhotographyPage} from "./components/PhotographyPage/PhotographyPage";
import {Skills} from "./components/Skills/Skills";



export const PortfolioRouter = () =>{
    return(
        <Router>
            <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/categories" element={<MainPage />} />
            <Route path="/PortfolioPage" element={<PortfolioPage/>}/>
            <Route path="/singlePortfolio" element={<SinglePortfolioPage/>}/>
            <Route path="/categories" element={<Footer />} />
            <Route path="/ResumePage" element={<ResumePage />} />
            <Route path="/PhotographyPage" element={<PhotographyPage/>}/>
            <Route path="/Skills" element ={<Skills/>}/>
            </Routes>
        </Router>
    );
};