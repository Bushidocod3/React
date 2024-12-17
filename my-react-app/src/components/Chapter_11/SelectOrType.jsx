import React, { useState } from 'react';

const SelectOrType = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState("");
    const [showInput, setShowInput] = useState(false);
    const [customItems, setCustomItems] = useState(items);

    const handleSelectChange = (e) => {
        const value = e.target.value;
        setSelectedItem(value);
        if (value === "Inne") {
            setShowInput(true);
        } else {
            setShowInput(false);
        }
    };

    const handleCustomSubmit = (e) => {
        e.preventDefault();
        if(!customItems.includes(selectedItem)) {
            setCustomItems([...customItems, selectedItem]);
        }
        setShowInput(false);
    };

    return (
        <form>
            <select onChange={handleSelectChange} value={selectedItem}>
                {customItems.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
                <option value="Inne">Inne</option>
            </select>

            {showInput && (
                <div>
                    <input
                        type="text"
                        value={selectedItem}
                        onChange={(e) => setSelectedItem(e.target.value)}
                    />
                    <button onClick={handleCustomSubmit}>Zatwierdź</button>
                </div>
            )}
        </form>
    );
};

export  default SelectOrType;