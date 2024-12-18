import React, {useState} from 'react';

const AddTask = ({ onAddTask }) => {
    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        if (inputValue.trim()) {
            onAddTask(inputValue);
            setInputValue("");
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Nowe zadanie"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAdd}>Dodaj</button>
        </div>
    );
};

export default AddTask;