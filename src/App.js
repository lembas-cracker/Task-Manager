import TaskBoard from "./TaskBoard";
import TodoForm from "./TodoForm";

function App() {
  return (
    <div className="flex-col items-center justify-center">
      <h2 className="text-center font-medium text-2xl">DAILIST</h2>
      <div className="max-w-lg rounded-md shadow-md border-gray-300 m-auto">
        <TodoForm></TodoForm>
        <TaskBoard></TaskBoard>
      </div>
    </div>
  );
}

export default App;
