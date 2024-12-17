import React, { useState } from "react";

const FindWeather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [weatherImage, setWeatherImage] = useState(null);
    const [error, setError] = useState(null);
    const apiKeyWeather = "38eac8f5026a26ff0653e4782f5c05bd";
    const apiKeyPixabay = "47540179-ba76cedd6a917e74ba1f6e094";

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKeyWeather}&lang=pl`);
            if (!response.ok) throw new Error("Miasto nie znalezione.");
            const data = await response.json();
            setWeatherData(data);

            const weatherDescription = data.weather[0].description;
            const pixabayResponse = await fetch(`https://pixabay.com/api/?key=${apiKeyPixabay}&q=${encodeURIComponent(weatherDescription)}&image_type=photo`);
            if (!pixabayResponse.ok) throw new Error("Obraz nie znaleziony.");
            const pixabayData = await pixabayResponse.json();
            setWeatherImage(pixabayData.hits[0]?.webformatURL);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Wybierz miasto"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={handleKeyPress}  // Obsługuje naciśnięcie klawisza Enter
            />
            <button onClick={handleSearch}>Szukaj</button>
            {error && <div>{error}</div>}
            {weatherData && (
                <div>
                    <h1>Pogoda w {weatherData.name}</h1>
                    <p>Temperatura: {weatherData.main.temp} °C</p>
                    <p>Opis: {weatherData.weather[0].description}</p>
                    {weatherImage && <img src={weatherImage} alt="Pogoda obraz" />}
                </div>
            )}
        </div>
    );
};

export default FindWeather;




