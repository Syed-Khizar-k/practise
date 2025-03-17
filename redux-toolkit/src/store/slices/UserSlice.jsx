//here first we create the slice of the store
import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    deleteUsers(state, action) {
      console.log("hii delete");
      return [];
    },
  },
});
console.log(userSlice.actions);

export { userSlice };
export const { addUser, removeUser, deleteUsers } = userSlice.actions;

//now we create the slice and we have to give its access to store file
