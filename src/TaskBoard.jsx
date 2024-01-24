import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { displayAllTasks, displayCompletedTasks, shouldDisplayCompletedTasks } from "./displayCompletedSlice";

const TaskBoard = () => {
  const shouldDisplayCompleted = useSelector(shouldDisplayCompletedTasks);
  console.log(shouldDisplayCompleted);
  const tasksArr = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-board-container">
      <div className="text-right font-sans text-slate-400 text-sm py-3">
        {tasksArr.length !== 0 && (
          <>
            <button onClick={() => dispatch(displayAllTasks())} className="px-4 hover:text-gray-500 tracking-wider">
              Все
            </button>
            <button onClick={() => dispatch(displayCompletedTasks())} className="hover:text-gray-500 tracking-wider">
              Завершенные
            </button>
          </>
        )}
      </div>
      <Task shouldDisplayCompleted={shouldDisplayCompleted}></Task>
    </div>
  );
};

export default TaskBoard;
