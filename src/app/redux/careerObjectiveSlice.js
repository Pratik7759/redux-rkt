const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
  careerObjective: JSON.parse(localStorage.getItem("careerObjective"))
    ? JSON.parse(localStorage.getItem("careerObjective"))
    : [],
};

const careerObjectiveSlice = createSlice({
  name: "careerObjectiveSlice",
  initialState,
  reducers: {
    addCareerObjective: (state, action) => {
      const data = {
        id: nanoid(),
        careerObjective: action.payload,
      };
      state.careerObjective.push(data);
      let careerObjectiveData = JSON.stringify(current(state.careerObjective));
      localStorage.setItem("careerObjective", careerObjectiveData);
    },
  },
});

export const { addCareerObjective } = careerObjectiveSlice.actions;
export default careerObjectiveSlice.reducer;
