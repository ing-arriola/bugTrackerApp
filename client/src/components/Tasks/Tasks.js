import React, { Fragment, useContext } from "react";
import TaskItem from "./TaskItem";
import TaskContext from "../../context/task/taskContext";

const Tasks = () => {
  const taskContext = useContext(TaskContext);
  const { tasks } = taskContext;
  return (
    <Fragment>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Fragment>
  );
};

export default Tasks;
