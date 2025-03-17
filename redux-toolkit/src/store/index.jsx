//this is the store file where we have to connect all the slices in our store
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    //first we have to add the name of the slice and then slcie
    users: userSlice.reducer,
  },
});

export default store;
