import React from "react";
import PropTypes from "prop-types";

const TaskItem = ({ task }) => {
  const { id, name, description, status } = task;
  console.log(name);
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">{name}</h3>
      <ul className="list">
        {description && (
          <li>
            <i className="far fa-file-alt" /> {description}
          </li>
        )}
        {status && (
          <li>
            <i className="far fa-lightbulb" /> {status}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
};

TaskItem.protoTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskItem;
