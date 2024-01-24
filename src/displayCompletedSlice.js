import { createSlice, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

export const initialState = {
  displayCompleted: false,
};

export const displayCompletedTasksSlice = createSlice({
  name: "displayCompletedTasks",
  initialState,
  reducers: {
    displayCompletedTasks: (state) => {
      return { ...state, displayCompleted: true };
    },
    displayAllTasks: (state) => {
      return { ...state, displayCompleted: false };
    },
  },
});

export const { displayCompletedTasks, displayAllTasks } = displayCompletedTasksSlice.actions;
export const shouldOnlyDisplayCompletedTasks = (state) => state.displayCompletedTasks.displayCompleted;

//middleware for storing elements in localStorage
export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(displayCompletedTasks, displayAllTasks),
  effect: (action, listenerApi) =>
    localStorage.setItem("displayCompletedTasks", JSON.stringify(listenerApi.getState().displayCompletedTasks)),
});

export default displayCompletedTasksSlice.reducer;
