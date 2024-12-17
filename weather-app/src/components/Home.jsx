import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const cities = ["Warszawa", "Londyn", "Paryż", "Tokio", "New York", "Sao Paulo", "Meksyk", "Kair"];

    return (
        <div>
            <h1>Popularne miasta</h1>
            <ul>
                {cities.map((city) => (
                    <li key={city}>
                        <Link to={`/cityweather/${city}`}>{city}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
