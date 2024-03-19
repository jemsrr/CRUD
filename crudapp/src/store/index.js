import { configureStore } from "@reduxjs/toolkit";
import studentListSlice from "./studentListSlice";

const store = configureStore({
  reducer: {
    studentList: studentListSlice.reducer,
  },
});

export default store;
