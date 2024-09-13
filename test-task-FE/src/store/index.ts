import { configureStore, createSelector } from "@reduxjs/toolkit";
import property from "./property/slice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    property
  },
  devTools: process.env.NODE_ENV !== "production"
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const createAppSelector = createSelector.withTypes<RootState>();
