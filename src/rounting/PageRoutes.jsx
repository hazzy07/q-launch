import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Layout from "../components/primary/Layout";
import Home from "../pages/Home";
import CreateCoin from "../pages/CreateCoin.JSX";
import ThreeGridStructure from "../pages/ThreeGridStructure";
import LiveStream from "../pages/LiveStream";
import CardsContent from "../pages/CardsContent";
import Profile from "../pages/Profile";
import ModerationPolicy from "../pages/ModerationPolicy";
import DMCAGuidelines from "../pages/DMCAGuidelines"
import TrademarkGuidline from "../pages/TrademarkGuidline";
import HomeCardComponent from "../components/homeCpnt/HomeCardComponent"
import Swap from "../pages/Swap";
export default function PageRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/create-coin" element={<CreateCoin />} />
            <Route path="/liveStream" element={<LiveStream />} />
            <Route path="/cardsContent" element={<CardsContent />} />
            <Route path="/home-card-component" element={<HomeCardComponent />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/moderation-policy" element={<ModerationPolicy />} />
            <Route path="/dmca-guidelines" element={<DMCAGuidelines/>} />
            <Route path="/trademark-guidline" element={<TrademarkGuidline/>} />


          </Route>
          <Route path="/swap" element={<Swap/>} />

          <Route path="/threeGridStructure" element={<ThreeGridStructure />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
