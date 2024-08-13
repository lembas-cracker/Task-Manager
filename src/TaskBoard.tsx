import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { displayAllTasks, displayCompletedTasks, shouldOnlyDisplayCompletedTasks } from "./displayCompletedSlice";
import { Task as ITask } from "./taskSlice";

const TaskBoard = () => {
  const shouldOnlyDisplayCompleted = useSelector(shouldOnlyDisplayCompletedTasks);
  const tasksArr = useSelector((state: { tasks: ITask[] }) => state.tasks);
  const completedOnlyArr = tasksArr.filter((task) => task.isCompleted);
  const dispatch = useDispatch();

  return (
    <div className="task-board-container">
      <div className="text-right font-sans text-slate-400 text-sm py-3">
        {/*If there are tasks then show the filter buttons*/}
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
              className={
                "px-4 border-l tracking-wider" + (shouldOnlyDisplayCompleted ? " text-black" : " hover:text-gray-500")
              }
            >
              Завершенные
            </button>
          </>
        )}
      </div>
      <div className="task-container flex flex-col py-1 border-transparent slidable-viewport">
        {tasksArr.length === 0 && <img src={process.env.PUBLIC_URL + "/to-do-no-task.png"} alt="Заданий пока нет" />}
        {/*If we are currently on the "Завершенные" tab and there are no completed tasks then display a message*/}
        {shouldOnlyDisplayCompleted && completedOnlyArr.length === 0 && (
          <center className="mt-20 text-lg font-sans font-bold text-gray-300">Завершённых задач нет</center>
        )}
        {/*If we are currently on the "Завершенные" tab then map through and display completed tasks otherwise map through all tasks*/}
        {(shouldOnlyDisplayCompleted ? completedOnlyArr : tasksArr).map((task) => (
          <Task task={task} key={task.id}></Task>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
