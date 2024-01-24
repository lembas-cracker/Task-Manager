import TaskBoard from "./TaskBoard";
import TodoForm from "./TodoForm";

function App() {
  return (
    <div className="flex justify-center m-4 lg:my-14">
      <div className="w-full lg:w-1/3">
        <h2 className="text-center font-medium text-2xl">DAILIST</h2>
        <div className="w-full">
          <TodoForm></TodoForm>
        </div>
        <div className="overflow-visible rounded-md border-gray-300">
          <TaskBoard></TaskBoard>
        </div>
      </div>
    </div>
  );
}

export default App;
