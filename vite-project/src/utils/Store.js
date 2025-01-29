import { configureStore } from "@reduxjs/toolkit";
import AddBookReducer from "./AddBookSlice";
const store = configureStore({
  reducer: {
    _addBookReducer: AddBookReducer,
  },
});
export default store;
