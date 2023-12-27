import React, { useState } from 'react';
import './TodoApp.css'; // Import your CSS file

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [subTaskInput, setSubTaskInput] = useState('');
  const [priorityInput, setPriorityInput] = useState('');
  const priorities = ['Low', 'Medium', 'High']; // Priority options

  const addTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = {
        id: Date.now(),
        task: taskInput,
        subtasks: [],
        priority: priorityInput,
      };

      setTasks([...tasks, newTask]);
      setTaskInput('');
      setPriorityInput('');
    }
  };

  const addSubTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, subtasks: [...task.subtasks, subTaskInput] }
        : task
    );

    setTasks(updatedTasks);
    setSubTaskInput('');
  };

  const updateTask = (taskId, newTaskName) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, task: newTaskName } : task
    );

    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const updateSubTask = (taskId, subTaskIndex, newSubTaskName) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            subtasks: task.subtasks.map((subtask, index) =>
              index === subTaskIndex ? newSubTaskName : subtask
            ),
          }
        : task
    );

    setTasks(updatedTasks);
  };

  const deleteSubTask = (taskId, subTaskIndex) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            subtasks: task.subtasks.filter(
              (_, index) => index !== subTaskIndex
            ),
          }
        : task
    );

    setTasks(updatedTasks);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>

      <div className="add-task">
        <input
          type="text"
          placeholder="Add Task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <select
          value={priorityInput}
          onChange={(e) => setPriorityInput(e.target.value)}
        >
          <option value="">Select Priority</option>
          {priorities.map((priority) => (
            <option key={priority} value={priority}>
              {priority}
            </option>
          ))}
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div>
              <span className="task-name">{task.task}</span>
              <span className="priority">Priority: {task.priority}</span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
              <button
                onClick={() => {
                  const newTaskName = prompt('Enter new task name', task.task);
                  if (newTaskName !== null) {
                    updateTask(task.id, newTaskName);
                  }
                }}
              >
                Update
              </button>
            </div>
            <div>
              <input
                type="text"
                placeholder="Add Subtask"
                value={subTaskInput}
                onChange={(e) => setSubTaskInput(e.target.value)}
              />
              <button onClick={() => addSubTask(task.id)}>Add Subtask</button>
            </div>
            {task.subtasks.length > 0 && (
              <ul>
                {task.subtasks.map((subtask, subTaskIndex) => (
                  <li key={subTaskIndex} className="subtask-item">
                    {subtask}
                    <button
                      onClick={() => {
                        const newSubTaskName = prompt(
                          'Enter new subtask name',
                          subtask
                        );
                        if (newSubTaskName !== null) {
                          updateSubTask(
                            task.id,
                            subTaskIndex,
                            newSubTaskName
                          );
                        }
                      }}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteSubTask(task.id, subTaskIndex)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
