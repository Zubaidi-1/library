import { createSlice, configureStore, createAction } from "@reduxjs/toolkit";
// Create slice takes an argument, it takes a name, initial state and reducers (its an object)
// use congig store (it accepts an object to initialize reducers)  , reducer : the name of slice.reducer
// to use them , use slice name . actions , export them from this file
// then dispatch them in the desired component

const inputSlice = createSlice({
  name: "input",
  initialState: "",
  reducers: {
    setInputValue: (state, action) => action.payload,
  },
});

const selectSlice = createSlice({
  name: "select",
  initialState: "isbn",
  reducers: {
    setSelect: (state, action) => action.payload,
  },
});
const bookSlice = createSlice({
  name: "books",
  initialState: {
    items: [],
    loading: false,
    fetchErrors: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.fetchErrors = false;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchError: (state) => {
      state.loading = false;
      state.fetchErrors = true;
    },
  },
});

const modalSlice = createSlice({
  name: "modal",
  initialState: { open: false, selectedBook: null },
  reducers: {
    openModal: (state, action) => {
      state.open = true;
      state.selectedBook = action.payload;
    },
    closeModal: (state) => {
      state.open = false;
      state.selectedBook = null;
    },
  },
});

const store = configureStore({
  reducer: {
    input: inputSlice.reducer,
    select: selectSlice.reducer,
    books: bookSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export default store;
export const inputActions = inputSlice.actions;
export const selectActions = selectSlice.actions;
export const bookActions = bookSlice.actions;
export const modalActions = modalSlice.actions;
