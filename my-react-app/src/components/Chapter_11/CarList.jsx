import React, { useState } from 'react';

const CarList = () => {
    const [selectedCar, setSelectedCar] = useState("");

    const cars = ["BMW", "Audi", "Ford", "Honda", "Mercedes", "Tesla"];

    return (
        <div>
            <select
                onChange={e => setSelectedCar(e.currentTarget.value)}
                value={selectedCar}>
                <option value="" disabled>Wybierz samochód</option>
                {cars.map((car) => (
                    <option key={car} value={car}>
                        {car}
                    </option>
                ))}
            </select>
            <p>Wybrany samochód: {selectedCar}</p>
            <span>Liczba znaków: {selectedCar.length}</span>
        </div>
    );
};

export default CarList;