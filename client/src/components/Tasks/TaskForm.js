import React, { useState, useContext, useEffect } from "react";
import TaskContext from "../../context/task/taskContext";

const TaskForm = () => {
  const taskContext = useContext(TaskContext);

  const { addTask, current } = taskContext;

  useEffect(() => {
    if (current !== null) {
      setTask(current);
    } else {
      setTask(
        {
          name: "",
          description: "",
          status: "Not started",
        },
        [taskContext, current]
      );
    }
  });

  const [task, setTask] = useState({
    name: "",
    description: "",
    status: "Not started",
  });
  const { name, description, status } = task;

  const onChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });

  const sendData = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({
      name: "",
      description: "",
      status: "Not started",
    });
  };

  return (
    <form onSubmit={sendData}>
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
      <input
        type="text"
        placeholder="status"
        name="status"
        value={status}
        onChange={onChange}
      />
      {/* <select name="status" id="status" onChange={onChange}>
        <option value="New">New</option>
        <option value="Assigned">Assigned</option>
        <option value="Open">Open</option>
        <option value="Fixed">Fixed</option>
      </select> */}
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
