import React, { useEffect, useContext } from "react";
import Tasks from "../Tasks/Tasks";
import TaskForm from "../Tasks/TaskForm";
import TaskFilter from "../Tasks/TaskFilter";
import AuthContext from "../../context/auth/authContext";
function Home() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

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
