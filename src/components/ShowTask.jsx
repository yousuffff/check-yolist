import React, { useEffect } from "react";
import AddTask from "./AddTask";

const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
 
  const handleEdit = (id) => {
    const selectTask = tasklist.find((task) => task.id === id);
    setTask(selectTask);
  };

  const handleDelete = (id) => {
    setTasklist(tasklist.filter((task) => task.id !== id));
  };
  // console.log(taskList)
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Tasks</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTasklist([])}>
          Clear Tasks
        </button>
      </div>
      <ul>
        {tasklist &&
          tasklist.map((task) => (
            <li key={task.id}>
              <p>
                <span className="name">{task.name}</span>
                <span className="time">{task.time}</span>
              </p>
              <i
                className="bi-pencil-square"
                onClick={() => handleEdit(task.id)}
              ></i>
              <i className="bi-trash" onClick={() => handleDelete(task.id)}></i>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ShowTask;
