import { configureStore } from "@reduxjs/toolkit";
import posts from "./posts";

export const reducerStore = configureStore({
  reducer: {
    posts: posts,
  },
});
