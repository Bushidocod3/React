import React, { useState } from "react";

const ToDoItem = ({ task, onRemove }) => {
    return (
        <li>
            {task}
            <button onClick={onRemove}>Usuń</button>
        </li>
    );
};

export default ToDoItem;