import React, { Fragment, useContext } from "react";
import TaskContext from "../../context/task/taskContext";

const Tasks = () => {
  const taskContext = useContext(TaskContext);
  const { tasks } = taskContext;
  return (
    <Fragment>
      {tasks.map((task) => (
        <h3>{task.name}</h3>
      ))}
    </Fragment>
  );
};

export default Tasks;
