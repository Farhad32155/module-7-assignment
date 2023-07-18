import React, { useState } from "react";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { description: newTask, completed: false }]);
            setNewTask("");
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const handleTaskCompletion = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={newTask}
                    onChange={handleInputChange}
                    placeholder="Enter a new task"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleTaskCompletion(index)}
                        />
                        <span className={task.completed ? "completed" : ""}>
                            {task.description}
                        </span>
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
