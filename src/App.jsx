import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import Todo from "./assets/direct-hit.png";
import onGoing from "./assets/glowing-star.png";
import done from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  console.log(tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  
  const handleMove = (item,indexN) => {
    console.log(item)
    const index = tasks.findIndex((index) => index === indexN);
    const clone = [...tasks];
    if (item.status === "todo") {
      clone[indexN].status = "ongoing";
    } else if (item.status === "ongoing") {
      clone[indexN].status = "completed";
    }
    setTasks(clone);
  };

  const handleEdit = (index, newTitle) => {
    
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, task: newTitle };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app-main">
        <TaskColumn
          sectionName="To Do"
          icon={Todo}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleMove={handleMove}
        />
        <TaskColumn
          sectionName="Ongoing"
          icon={onGoing}
          tasks={tasks}
          status="ongoing"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleMove={handleMove}
        />
        <TaskColumn
          sectionName="Completed"
          icon={done}
          tasks={tasks}
          status="completed"
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleMove={handleMove}
        />
      </main>
    </div>
  );
};

export default App;
