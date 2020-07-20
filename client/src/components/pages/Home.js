import React from "react";
import Tasks from "../Tasks/Tasks";
import TaskForm from "../Tasks/TaskForm";

function Home() {
  return (
    <div className="grid-2">
      <div>{/* Task Form */}</div>
      <div>
        <Tasks />
      </div>
    </div>
  );
}

export default Home;
