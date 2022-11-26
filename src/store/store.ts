import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import trivia from "./trivia/trivia.slice";

const store = configureStore({
   reducer: {
      trivia: trivia
   }
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;