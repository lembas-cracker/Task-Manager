import { createSlice, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const initialState = [];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      return [...state, { id: uuid(), task: action.payload, isCompleted: false }];
    },

    removeTask: (state, action) => {
      const index = state.findIndex((el) => el.id === action.payload);
      if (index > -1) state.splice(index, 1);
    },

    toggleTaskCompleted: (state, action) => {
      const foundElement = state.find((el, i) => el.id === action.payload);
      foundElement.isCompleted = !foundElement.isCompleted;
    },
  },
});

export const { addTask, removeTask, toggleTaskCompleted } = taskSlice.actions;

export const completedTasks = (state) => state.tasks.filter((el) => el.isCompleted === true);

//Middleware for storing elements in localStorage
export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(addTask, removeTask, toggleTaskCompleted),
  effect: (action, listenerApi) => localStorage.setItem("tasks", JSON.stringify(listenerApi.getState().tasks)),
});

export default taskSlice.reducer;
