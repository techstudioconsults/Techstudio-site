import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  studentsPaymentRecord: [], //by courseID
  singleStudentPaymentRecord: {},
}

const PAYMENT_SLICE = {
  name: 'payment',
  initialState: STATE,
  reducers: {
    setStudentPaymentRecord: (state, action) => {
      const { record } = action.payload
      state.studentsPaymentRecord = record
    },
    // setSingleStudentPaymentRecord: (state, action) => {
    //   const { record } = action.payload
    //   state.singleStudentPaymentRecord = record
    // },
  },
}

const paymentSlice = createSlice(PAYMENT_SLICE)

export const { setStudentPaymentRecord, setSingleStudentPaymentRecord } =
  paymentSlice.actions

export default paymentSlice.reducer

export const selectStudentsPaymentRecord = (state) =>
  state.payment.studentsPaymentRecord
export const selectSingleStudentsPaymentRecord = (state) =>
  state.payment.singleStudentPaymentRecord
