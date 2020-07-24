import React, { Fragment, useContext } from "react";
import TaskItem from "./TaskItem";
import TaskContext from "../../context/task/taskContext";

const Tasks = () => {
  const taskContext = useContext(TaskContext);
  const { tasks, filtered } = taskContext;

  if (tasks.lenght === 0) {
    return <h4>Please add a task</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((task) => <TaskItem key={task.id} task={task} />)
        : tasks.map((task) => <TaskItem key={task.id} task={task} />)}
    </Fragment>
  );
};

export default Tasks;
