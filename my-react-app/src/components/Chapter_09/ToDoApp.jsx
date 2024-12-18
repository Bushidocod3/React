import React, {useState} from "react";
import AddTask from "./AddTask.jsx";
import ToDoList from "./ToDoList.jsx";

const ToDoApp = () => {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const handleRemoveTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>TODO List</h1>
            <AddTask onAddTask={handleAddTask} />
            <ToDoList tasks={tasks} onRemoveTask={handleRemoveTask} />
        </div>
    );
};

export default ToDoApp;