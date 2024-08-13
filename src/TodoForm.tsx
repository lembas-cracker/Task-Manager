import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);

  //Adding a task to localStorage
  const addAndStoreTask = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (ref.current) {
      let task = ref.current.value.trim();

      if (task !== "") {
        dispatch(addTask(task));
        ref.current.value = "";
      }
    }
  };

  return (
    <div className="form-container relative">
      <form onSubmit={addAndStoreTask} className="form-field">
        <input
          type="text"
          placeholder="Что Вам нужно сделать?"
          ref={ref}
          className="form-input text-md my-3 p-3 w-11/12 border border-gray-300 bg-slate-100 rounded-3xl focus:outline-none focus:shadow-inner"
        />
        <button className="absolute top-3 right-0 p-3 leading-[1.65rem] font-semibold bg-red-600 text-white rounded-3xl hover:bg-red-500 focus:outline-none focus:ring focus:border-blue-500">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
