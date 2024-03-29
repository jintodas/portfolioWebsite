import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResumePage } from "./components/CV/ResumePage";
import { LandingPage } from "./components/LandingPage/LandingPage";
import {MainPage } from "./components/LandingPage/MainPage";
import{PortfolioPage} from "./components/PortfolioPage/PortfolioPage";
import Footer from "./components/ui/footer";


export const PortfolioRouter = () =>{
    return(
        <Router>
            <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/categories" element={<MainPage />} />
            <Route path="/PortfolioPage" element={<PortfolioPage/>}/>
            <Route path="/categories" element={<Footer />} />
            <Route path="/ResumePage" element={<ResumePage />} />
            </Routes>
        </Router>
    );
};