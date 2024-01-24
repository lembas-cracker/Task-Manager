import TaskBoard from "./TaskBoard";
import TodoForm from "./TodoForm";

function App() {
  return (
    <div className="flex justify-center items-center lg:h-screen">
      <div className="lg:w-1/3">
        <h2 className="text-center font-medium text-2xl">DAILIST</h2>
        <div className="w-full lg:max-h-96">
          <TodoForm></TodoForm>
        </div>
        <div className="lg:max-h-96 overflow-visible rounded-md border-gray-300">
          <TaskBoard></TaskBoard>
        </div>
      </div>
    </div>
  );
}

export default App;
