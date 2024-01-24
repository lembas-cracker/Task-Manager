import React from "react";
import "./taskAnimation.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "./taskSlice";
import { completedTasks } from "./taskSlice";

const CompletedTasks = () => {
  const listOfCompletedTasks = useSelector(completedTasks);
  const dispatch = useDispatch();

  const removeTaskFromList = (task) => {
    dispatch(removeTask(task));
  };

  return (
    <>
      {listOfCompletedTasks.map((el, i) => {
        return (
          <div className="flex items-center shadow-sm shadow-slate-100 py-4" key={el.id}>
            <label className="task-container-label flex items-center">
              <input type="checkbox" checked={el.isDone === true} />
              <i className="task-container-checkbox"></i>
              <span className="text-slate-400">
                <p className="task-description ml-7">{el.task}</p>
              </span>
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
    </>
  );
};

export default CompletedTasks;
