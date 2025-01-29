import { createSlice } from "@reduxjs/toolkit";
import books from "../utils/Books";
const AddBookSlice = createSlice({
  name: "AddBook",
  initialState: {
    booksCollection: books, //for adding to the list
    newBook: {
      //for new book fields
      id: 0,
      title: "",
      author: "",
      category: "",
      publicationYear: 0,
      description: "",
      image: "",
      rating: 0,
    },
  },
  reducers: {
    newBookMethod: (state, action) => {
      state.newBook[action.payload.field] = action.payload.value;
    },
    addBookMethod: (state) => {
      state.booksCollection = [...state.booksCollection, state.newBook];
    },
  },
});
export const { newBookMethod, addBookMethod } = AddBookSlice.actions;
export default AddBookSlice.reducer;
