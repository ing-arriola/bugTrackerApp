import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";
import {
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TASK,
  FILTER_TASKSS,
  CLEAR_FILTER,
} from "../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      {
        id: 1,
        name: "create endpoint to insert users",
        description:
          "I must create and test the enpoint related with user suscription",
        status: "Not started yet",
      },
      {
        id: 2,
        name: "create route to insert taks",
        description:
          "I must create and test the route related with add new tasks",
        status: "just created but not tested",
      },
      {
        id: 3,
        name: "View for user suscription",
        description:
          "I must create and test the view where user make a suscription",
        status: "Pending to create components but already made the desing",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);
  // Add contact

  const addTask = (task) => {
    task.id = 2324232444;
    dispatch({ type: ADD_TASK, payload: task });
  };

  // Delete contact
  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
  };
  // Set current contact
  const setCurrent = (task) => {
    dispatch({ type: SET_CURRENT, payload: task });
  };
  // Clear current task
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update task
  const updateTask = (task) => {
    dispatch({ type: UPDATE_TASK, payload: task });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        current: state.current,
        addTask,
        deleteTask,
        setCurrent,
        clearCurrent,
        updateTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
