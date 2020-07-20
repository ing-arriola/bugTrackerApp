import React from "react";
import Tasks from "../Tasks/Tasks";

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
