import React, { useEffect, useState } from "react";

const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    if (task.id) {

      const updateTask = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: todo.id,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTasklist(updateTask);
      setTask("");
    } else {
      const newtask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTasklist([...tasklist, newtask]);
      // e.target.task.value = ''
      setTask("");
    }
  };
  return (
    <div className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id=""
          value={task ? task.name : ""}
          placeholder="Enter Task"
          autoComplete="off"
          required
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task ? task.id ? "Update" : "Add" : "Add"}</button>
      </form>
    </div>
  );
};

export default AddTask;
