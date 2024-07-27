import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  assignments: db.assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        ...assignment,
        _id: new Date().getTime().toString(),
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentID }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentID
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) => {
        console.log(a._id === assignment._id)
        if (a._id === assignment._id) {
          return assignment;
        } else {
          return a;
        }
      });
    },
  },
});
export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

