import React from "react";
import "./taskAnimation.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "./taskSlice";
import { toggleTaskCompleted } from "./taskSlice";

const Task = () => {
  const tasksArr = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const removeTaskFromList = (task) => {
    dispatch(removeTask(task));
  };

  const handleTaskCompleted = (task) => {
    console.log("toggled", task);
    dispatch(toggleTaskCompleted(task));
  };

  return (
    <div className="task-container flex flex-col py-1 px-6">
      {tasksArr.length === 0 && <img src={process.env.PUBLIC_URL + "/to-do-no-task.png"} alt="Заданий пока нет" />}
      {tasksArr.map((el, i) => {
        return (
          <div className="flex items-center" key={el.id}>
            <label className="task-container_label flex items-center">
              <input type="checkbox" checked={el.isDone} onClick={() => handleTaskCompleted(el)} />
              <i className="task-container-checkbox"></i>
              <p className="task-description ml-7">{el.task}</p>
            </label>
            <img
              src={process.env.PUBLIC_URL + "/delete.png"}
              alt="Удалить"
              onClick={() => removeTaskFromList(el)}
              className="w-3 h-3 opacity-12 ml-auto cursor-pointer"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Task;
