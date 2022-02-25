import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./Reducers";

const store = configureStore({
  reducer: reducer,
});

export default store;