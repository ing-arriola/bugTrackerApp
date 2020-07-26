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
    tasks: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Get Tasks
  const getTasks = async () => {
    try {
      const res = await axios.get("/api/tasks");
      dispatch({
        type: GET_TASKS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TASK_ERROR,
        payload: err.response.msg,
      });
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

  // Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      dispatch({ type: DELETE_TASK, payload: id });
    } catch (err) {
      dispatch({ type: TASK_ERROR, payload: err.respose.msg });
    }
  };

  // Update task
  const updateTask = async (task) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const res = await axios.put(`/api/tasks/${task._id}`, task, config);
      dispatch({
        type: UPDATE_TASK,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TASK_ERROR,
        payload: err.respose.msg,
      });
    }
  };

  // clear tasks
  const clearTasks = () => {
    dispatch({ type: CLEAR_TASKS });
  };

  // Set current task
  const setCurrent = (task) => {
    dispatch({ type: SET_CURRENT, payload: task });
  };
  // Clear current task
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
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
        clearTasks,
        updateTask,
        filterTasks,
        clearFilter,
        getTasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
