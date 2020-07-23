import React, { useContext } from "react";
import PropTypes from "prop-types";
import TaskContext from "../../context/task/taskContext";

const TaskItem = ({ task }) => {
  const taskContext = useContext(TaskContext);
  const { deleteTask, setCurrent, clearCurrent } = taskContext;
  const { id, name, description, status } = task;

  const onDelete = () => {
    deleteTask(id);
    clearCurrent();
  };

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
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(task)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

TaskItem.protoTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskItem;
