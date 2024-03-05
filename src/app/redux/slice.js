// slice.js
import { createSlice, current, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [],
};

const userSlice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { id, name, age } = action.payload;
      state.users.push({ id, name, age });
      let userData = JSON.stringify(current(state.users));
      localStorage.setItem("users", userData);
      // console.log(userData);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
