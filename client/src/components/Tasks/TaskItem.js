import React from "react";

const TaskItem = ({ task }) => {
  const { id, name, description, status } = task;
  console.log(name);
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">{name}</h3>
    </div>
  );
};

export default TaskItem;
