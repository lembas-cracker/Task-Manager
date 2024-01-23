import React from "react";
import "./taskAnimation.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "./taskSlice";
import { toggleTaskCompleted } from "./taskSlice";

const Task = () => {
  const tasksArr = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const removeTaskFromList = (taskIndex) => {
    dispatch(removeTask({ taskIndex }));
  };

  const handleTaskCompleted = (taskIndex) => {
    dispatch(toggleTaskCompleted({ taskIndex }));
  };

  return (
    <div className="task-container flex flex-col py-1 px-6">
      {tasksArr.length === 0 && <img src="/to-do-no-task.png" alt="" />}
      {tasksArr.map((el, i) => {
        return (
          <div className="flex items-center" key={i}>
            <label className="task-container_label flex items-center">
              <input type="checkbox" name="" id="" onClick={() => handleTaskCompleted(el[i])} />
              <i className="task-container-checkbox"></i>
              <p className="task-description ml-7">{el.task}</p>
            </label>
            <img
              src="/delete.png"
              alt=""
              onClick={() => removeTaskFromList(el[i])}
              className="w-3 h-3 opacity-12 ml-auto cursor-pointer"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Task;
