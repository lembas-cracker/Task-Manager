import { configureStore } from "@reduxjs/toolkit";
import { listenerMiddleware } from "../taskSlice";
import taskReducer, { initialState as taskSliceInitialState } from "../taskSlice";

const previousSessionTasks = JSON.parse(localStorage.getItem("tasks") || "null");

export const store = configureStore({
  preloadedState: {
    tasks: previousSessionTasks === null ? taskSliceInitialState : previousSessionTasks,
  },
  reducer: {
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), listenerMiddleware.middleware],
});

export default store;
