import React from "react";
import "./taskAnimation.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "./taskSlice";
import { toggleTaskCompleted } from "./taskSlice";
import CompletedTasks from "./CompletedTasks";

const Task = ({ shouldDisplayCompleted }) => {
  const tasksArr = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const removeTaskFromList = (task) => {
    dispatch(removeTask(task));
  };

  const handleTaskCompleted = (task) => {
    dispatch(toggleTaskCompleted(task));
  };

  return (
    <div className="task-container flex flex-col py-1 border-transparent">
      {tasksArr.length === 0 && <img src={process.env.PUBLIC_URL + "/to-do-no-task.png"} alt="Заданий пока нет" />}
      {shouldDisplayCompleted ? (
        <CompletedTasks />
      ) : (
        tasksArr.map((el, i) => {
          return (
            <div className="flex items-center shadow-sm shadow-slate-100" key={el.id}>
              <label className="task-container-label flex items-center my-4">
                <input type="checkbox" checked={el.isDone} onChange={() => handleTaskCompleted(el)} />
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
        })
      )}
    </div>
  );
};

export default Task;
