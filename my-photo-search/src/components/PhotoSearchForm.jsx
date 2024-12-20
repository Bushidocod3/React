import React, { useState } from "react";

const PhotoSearchForm = ({ onSearch }) => {
    const [category, setCategory] = useState("");
    const [base, setBase] = useState("pixabay");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(category, base);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Wybierz bazę zdjęć:
                <select value={base} onChange={(e) => setBase(e.target.value)}>
                    <option value="pixabay">Pixabay</option>
                    <option value="pexels">Pexels</option>
                </select>
            </label>

            <label>
                Wpisz kategorię:
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Co chcesz wygenerować ... ?"
                />
            </label>

            <button type="submit">Wyszukaj</button>
        </form>
    );
};

export default PhotoSearchForm;
