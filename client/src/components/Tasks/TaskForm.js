import React, { useState, useContext } from "react";
import TaskContext from "../../context/task/taskContext";
const TaskForm = () => {
  const taskContext = useContext(TaskContext);
  const [task, setTask] = useState({
    name: "",
    description: "",
    status: "Not started",
  });
  const { name, description, status } = task;

  const onChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefaut();
    taskContext.addTasl(task);
    setTask({
      name: "",
      description: "",
      status: "Not started",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Task</h2>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="description"
        name="description"
        value={description}
        onChange={onChange}
      />
      <h5>Task Status</h5>

      <select name="state" id="state">
        <option value="New">New</option>
        <option value="Assigned">Assigned</option>
        <option value="Open">Open</option>
        <option value="Fixed">Fixed</option>
      </select>
      <div>
        <input
          type="submit"
          value="Add Task"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default TaskForm;
