import { createSlice } from "@reduxjs/toolkit";

const tasksList: string[] = []

const tasksListSlice = createSlice({
  name: "tasksList",
  initialState: {
    tasksList: tasksList
  },
  reducers: {
    addTask(state, action) {
      state.tasksList.push(action.payload)
    },
    removeAllTasks(state, action) {
      for (let i = state.tasksList.length; i > 0; i--) {
        state.tasksList.pop()
      }
    },
    removeTask(state, action) {
      state.tasksList.splice(action.payload, 1)
    },
  }
})

export const { addTask, removeAllTasks, removeTask } = tasksListSlice.actions
export default tasksListSlice.reducer