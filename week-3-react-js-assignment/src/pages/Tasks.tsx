import React, { useState, useEffect } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = () => {
    if (taskInput.trim()) {
      const newTask = { id: Date.now(), text: taskInput, completed: false };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setTaskInput('');
    }
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">Task Manager</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
        className="border p-2"
      />
      <button onClick={addTask} className="bg-blue-500 text-white p-2">Add Task</button>
      <div>
        <button onClick={() => setFilter('All')} className="p-2">All</button>
        <button onClick={() => setFilter('Active')} className="p-2">Active</button>
        <button onClick={() => setFilter('Completed')} className="p-2">Completed</button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className="flex justify-between items-center">
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
            <div>
              <button onClick={() => toggleTaskCompletion(task.id)} className="p-2">Toggle</button>
              <button onClick={() => deleteTask(task.id)} className="p-2">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;