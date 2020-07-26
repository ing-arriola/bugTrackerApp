import React, { useReducer } from "react";
import axios from "axios";
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";
import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TASK,
  FILTER_TASKS,
  CLEAR_TASKS,
  CLEAR_FILTER,
  TASK_ERROR,
} from "../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [],
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Get Tasks
  const getTasks = async () => {
    try {
      const res = await axios.get("/api/tasks");
      dispatch({ type: GET_TASKS, payload: res.data });
    } catch (err) {
      dispatch({ type: TASK_ERROR, payload: err.respose.msg });
    }
  };

  // Add Task
  const addTask = async (task) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/tasks", task, config);
      dispatch({ type: ADD_TASK, payload: res.data });
    } catch (err) {
      dispatch({ type: TASK_ERROR, payload: err.respose.msg });
    }
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
        error: state.error,
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
