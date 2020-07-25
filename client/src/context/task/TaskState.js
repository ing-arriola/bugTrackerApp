import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";
import {
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TASK,
  FILTER_TASKS,
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
        name: "I have to check the route to insert taks",
        description:
          "I must check and test the route related with add new tasks",
        status: "just created but not tested",
      },
      {
        id: 3,
        name: "View for user suscription",
        description: "I have to deploy the view where user make a suscription",
        status: "Pending to deploy components but already made the desing",
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);
  // Add contact

  const addTask = (task) => {
    task.id = uuidv4();
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
  // Filter Tasks
  const filterTasks = (text) => {
    dispatch({ type: FILTER_TASKS, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        current: state.current,
        filtered: state.filtered,
        addTask,
        deleteTask,
        setCurrent,
        clearCurrent,
        updateTask,
        filterTasks,
        clearFilter,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
