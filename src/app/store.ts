import { configureStore } from "@reduxjs/toolkit";
import taskReducer, {
  initialState as taskSliceInitialState,
  listenerMiddleware as listenerMiddlewareTasks,
} from "../taskSlice";
import displayCompletedTasksReducer, {
  initialState as displayCompletedInitialState,
  listenerMiddleware as listenerMiddlewareDisplayCompleted,
} from "../displayCompletedSlice";

//Retrieving current states from localStorage
const previousSessionTasks = JSON.parse(localStorage.getItem("tasks") || "null");
const previousSessionDisplayCompleted = JSON.parse(localStorage.getItem("displayCompletedTasks") || "null");

export const store = configureStore({
  preloadedState: {
    tasks: previousSessionTasks === null ? taskSliceInitialState : previousSessionTasks,
    displayCompletedTasks:
      previousSessionDisplayCompleted === null ? displayCompletedInitialState : previousSessionDisplayCompleted,
  },
  reducer: {
    tasks: taskReducer,
    displayCompletedTasks: displayCompletedTasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(listenerMiddlewareTasks.middleware)
      .concat(listenerMiddlewareDisplayCompleted.middleware),
});

export default store;
