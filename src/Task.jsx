import React, { useState } from "react";
import "./taskAnimation.scss";
import { useDispatch } from "react-redux";
import { removeTask } from "./taskSlice";
import { toggleTaskCompleted } from "./taskSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const removeTaskFromList = (taskId) => {
    dispatch(removeTask(taskId));
  };

  const handleTaskCompleted = (taskId) => {
    dispatch(toggleTaskCompleted(taskId));
  };

  // Set to true to render with `.is-sliding-out` which immediately start the CSS animation.
  // The task will be only removed from the list after the animation is done, so that it doesn't disappear before animating.
  const [isCurrentlySlidingOut, setSlidingOut] = useState(false);

  return (
    <div
      className={
        "flex items-center shadow-sm shadow-slate-100 slidable" + (isCurrentlySlidingOut ? " is-sliding-out" : "")
      }
      onAnimationEnd={() => {
        removeTaskFromList(task.id);
      }}
    >
      <label className="task-container-label flex min-w-0 items-center my-4">
        <input type="checkbox" checked={task.isCompleted} onChange={() => handleTaskCompleted(task.id)} />
        <i className="task-container-checkbox"></i>
        <p className="task-description min-w-0 break-words truncate ml-7 mr-2" title={task.task}>
          {task.task}
        </p>
      </label>
      <img
        src={process.env.PUBLIC_URL + "/delete.png"}
        alt="Удалить"
        onClick={() => {
          setSlidingOut(true);
        }}
        className="w-3 h-3 opacity-12 ml-auto cursor-pointer"
      />
    </div>
  );
};

export default Task;
