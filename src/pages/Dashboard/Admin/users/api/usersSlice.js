import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  tutors: [],
  tutorsByCourseID: [],
  students: [],
  studentsByCourseID: [],
}

const RESOURCE_SLICE = {
  name: 'users',
  initialState: STATE,
  reducers: {
    setTutors: (state, action) => {
      const { tutors } = action.payload
      state.tutors = tutors
    },
    setTutorsByCourseID: (state, action) => {
      const { tutors } = action.payload
      state.tutorsByCourseID = tutors
    },
    setStudents: (state, action) => {
      const { students } = action.payload
      state.students = students
    },
    setStudentsByCourseID: (state, action) => {
      const { students } = action.payload
      state.studentsByCourseID = students
    },
  },
}

const resourceSlice = createSlice(RESOURCE_SLICE)

export const {
  setTutors,
  setTutorsByCourseID,
  setStudents,
  setStudentByCourseID,
} = resourceSlice.actions

export default resourceSlice.reducer

export const selectAllTutors = (state) => state.users.tutors
export const selectAllStudents = (state) => state.users.students
export const selectTutorsByCourseID = (state) => state.users.tutorsByCourseID
export const selectStudentsByCourseID = (state) =>
  state.users.studentsByCourseID
