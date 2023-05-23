import { configureStore } from "@reduxjs/toolkit";
import authSllice from "../Reducers/authSlice";
export const store = configureStore({
  reducer: { auth: authSllice },
});
