import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { displayAllTasks, displayCompletedTasks, shouldOnlyDisplayCompletedTasks } from "./displayCompletedSlice";

const TaskBoard = () => {
  const shouldOnlyDisplayCompleted = useSelector(shouldOnlyDisplayCompletedTasks);
  const tasksArr = useSelector((state) => state.tasks);
  const completedOnlyArr = tasksArr.filter((task) => task.isCompleted);
  const dispatch = useDispatch();

  return (
    <div className="task-board-container">
      <div className="text-right font-sans text-slate-400 text-sm py-3">
        {tasksArr.length !== 0 && (
          <>
            <button
              onClick={() => dispatch(displayAllTasks())}
              className={"px-4 tracking-wider" + (shouldOnlyDisplayCompleted ? " hover:text-gray-500" : " text-black")}
            >
              Все
            </button>
            <button
              onClick={() => dispatch(displayCompletedTasks())}
              className={"px-4 tracking-wider" + (shouldOnlyDisplayCompleted ? " text-black" : " hover:text-gray-500")}
            >
              Завершенные
            </button>
          </>
        )}
      </div>
      <div className="task-container flex flex-col py-1 border-transparent slidable-viewport">
        {tasksArr.length === 0 && <img src={process.env.PUBLIC_URL + "/to-do-no-task.png"} alt="Заданий пока нет" />}
        {shouldOnlyDisplayCompleted && completedOnlyArr.length === 0 && (
          <center className="mt-14">Завершённых задач нет</center>
        )}
        {(shouldOnlyDisplayCompleted ? completedOnlyArr : tasksArr).map((task) => (
          <Task task={task} key={task.id}></Task>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
