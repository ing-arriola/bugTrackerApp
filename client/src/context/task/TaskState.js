import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
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
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);
  // Add contact

  const addTask = (task) => {
    task.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: task });
  };
  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
