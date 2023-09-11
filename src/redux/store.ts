import { configureStore } from "@reduxjs/toolkit";
import memoryReducer from './features/memoryDetailsSlicer'

export const store = configureStore({
  reducer: {
    memoryReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
