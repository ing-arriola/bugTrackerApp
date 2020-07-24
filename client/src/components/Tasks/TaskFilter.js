import React, { useContext, useRef } from "react";
import TaskContext from "../../context/task/taskContext";
function TaskFilter() {
  const taskContext = useContext(TaskContext);
  const text = useRef("");
  const onChange = (e) => {
    if (text.current.value !== "") {
      taskContext.TaskFilter(e.targe.value);
    } else {
      taskContext.clearFilter();
    }
  };
  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Tasks..."
        onChange={onChange}
      />
    </form>
  );
}

export default TaskFilter;
