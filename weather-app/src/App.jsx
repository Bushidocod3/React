import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import CityWeather from "./components/CityWeather";
import FindWeather from "./components/FindWeather";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cityweather/:city" element={<CityWeather />} />
                <Route path="/findweather" element={<FindWeather />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
