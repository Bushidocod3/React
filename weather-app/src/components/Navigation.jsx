import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Strona Główna</Link></li>
                <li><Link to="/findweather">Szukaj Miasta</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
