import { configureStore } from "@reduxjs/toolkit";
import tasksListSlice from "./tasksList";

export default configureStore({
    reducer: {
        tasksList: tasksListSlice,
    }
})
