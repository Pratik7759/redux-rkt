// store.js
const { configureStore } = require("@reduxjs/toolkit");
import userReducer from "./slice";
import careerObjectiveReducer from "./careerObjectiveSlice";

export const store = configureStore({
  reducer: {
    userData: userReducer,
    careerObjectiveData: careerObjectiveReducer,
  },
});
