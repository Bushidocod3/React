import React, { useState } from "react";

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks([...tasks, `Zadanie ${tasks.length + 1}`]);
    };

    return (
        <div>
            <button onClick={addTask}>Dodaj zadanie</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;