import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  revenueInfo: {},
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
    setRevenueInfo: (state, action) => {
      const { revenueInfo } = action.payload
      state.revenueInfo = revenueInfo
    },
    setSingleStudentPaymentRecord: (state, action) => {
      const { record } = action.payload
      state.singleStudentPaymentRecord = record
    },
  },
}

const paymentSlice = createSlice(PAYMENT_SLICE)

export const {
  setStudentPaymentRecord,
  setSingleStudentPaymentRecord,
  setRevenueInfo,
} = paymentSlice.actions

export default paymentSlice.reducer

export const selectStudentsPaymentRecord = (state) =>
  state.payment.studentsPaymentRecord
export const selectSingleStudentsPaymentRecord = (state) =>
  state.payment.singleStudentPaymentRecord
export const selectRevenueInfo = (state) => state.payment.revenueInfo
