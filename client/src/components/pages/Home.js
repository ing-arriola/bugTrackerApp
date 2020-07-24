import React from "react";
import Tasks from "../Tasks/Tasks";
import TaskForm from "../Tasks/TaskForm";
import TaskFilter from "../Tasks/TaskFilter";

function Home() {
  return (
    <div className="grid-2">
      <div>
        <TaskForm />
      </div>
      <div>
        <TaskFilter />
        <Tasks />
      </div>
    </div>
  );
}

export default Home;
