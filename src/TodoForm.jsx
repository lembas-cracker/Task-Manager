import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const addAndStoreTask = (e) => {
    e.preventDefault();
    let task = ref.current.value.trim();

    if (task !== "") {
      dispatch(addTask(task));
      ref.current.value = "";
    }
  };

  return (
    <div className="form-container relative">
      <form onSubmit={addAndStoreTask} className="form-field">
        <input
          type="text"
          placeholder="Что Вам нужно сделать?"
          ref={ref}
          className="form-input text-sm my-3 p-3 mx-5 w-4/5 border border-gray-300 bg-slate-100 rounded-3xl focus:outline-none focus:shadow-inner"
        />
        <button className="absolute top-3 right-5 p-3 pb-2.5 font-semibold bg-red-500 text-white rounded-3xl hover:bg-red-400 focus:outline-none focus:ring focus:border-blue-500">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
