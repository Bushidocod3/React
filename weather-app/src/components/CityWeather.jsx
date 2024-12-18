import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CityWeather = () => {
    const { city } = useParams();
    const [weatherData, setWeatherData] = useState(null);
    const [weatherImage, setWeatherImage] = useState(null);
    const [error, setError] = useState(null);

    const apiKeyWeather = "38eac8f5026a26ff0653e4782f5c05bd";
    const apiKeyPixabay = "47540179-ba76cedd6a917e74ba1f6e094";

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const weatherResponse = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKeyWeather}&lang=pl`
                );
                if (!weatherResponse.ok) throw new Error("Nie znaleziono danych pogodowych.");
                const weatherData = await weatherResponse.json();
                setWeatherData(weatherData);


                const description = weatherData.weather[0].description;
                const pixabayResponse = await fetch(
                    `https://pixabay.com/api/?key=${apiKeyPixabay}&q=${encodeURIComponent(description)}&image_type=photo`
                );
                if (!pixabayResponse.ok) throw new Error("Nie znaleziono obrazu.");
                const pixabayData = await pixabayResponse.json();
                setWeatherImage(pixabayData.hits[0]?.webformatURL || null);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchWeather();
    }, [city]);

    if (error) return <div>Błąd: {error}</div>;
    if (!weatherData) return <div>Ładowanie danych pogodowych...</div>;

    return (
        <div>
            <h1>Pogoda w {city}</h1>
            <p>Temperatura: {weatherData.main.temp} °C</p>
            <p>Opis: {weatherData.weather[0].description}</p>
            {weatherImage && <img src={weatherImage} alt="Ilustracja pogody" />}
        </div>
    );
};

export default CityWeather;