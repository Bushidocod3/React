import React, { useState, useEffect } from 'react';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setPokemonList(data.results || []);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <ul>
            {pokemonList.map((pokemon, index) => (
                <li key={index}>{pokemon.name}</li>
            ))}
        </ul>
    );
};

export default PokemonList;
