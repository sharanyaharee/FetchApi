import React, { useState,useRef,useEffect } from "react";
import "./TaskForm.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo"
  });
  
  const inputRef = useRef()
useEffect(()=>{
 inputRef.current.focus()
})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  if (taskData.task.trim() === "") {
    toast.error("Task cannot be empty!");
    return; 
  }
  
  if (!taskData.task || !/^[a-zA-Z0-9\s]+$/.test(taskData.task.trim())) {
    toast.error("Please enter a valid task name containing letters and spaces only!",{theme: "colored"});
    return; 
  }

  const minTaskLength = 3; 
  const maxTaskLength = 30; 
  if (taskData.task.trim().length < minTaskLength || taskData.task.trim().length > maxTaskLength) {
  
    toast.error(`Task name should be between ${minTaskLength} and ${maxTaskLength} characters long!`);
    return; 
  }
 

    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo"
    })
  };

  return (
    <div>
    <h1>To Do App</h1>
             <ToastContainer position="top-center" />
      <header className="app-header">
        <form action="" onSubmit={handleSubmit}>
          <input
         ref={inputRef}
            type="text"
            name="task"
            value={taskData.task}
            onChange={handleChange}
            className="task-input"
            placeholder="Enter task"
          />
          <div className="task-form-bottom-line">
        
            <div>
              <select
                className="task-status"
                name="status"
                value={taskData.status}
                onChange={handleChange}
              >
                <option value="todo">To Do</option>
                <option value="ongoing">On Going</option>
                <option value="completed">Completed</option>
              </select>

              <button type="submit" className="task-submit">
                +Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
};

export default TaskForm;
