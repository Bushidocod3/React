import React, {useState} from 'react';
import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, onRemoveTask }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <ToDoItem
                    key={index}
                    task={task}
                    onRemove={() => onRemoveTask(index)}
                />
            ))}
        </ul>
    );
};

export default ToDoList;