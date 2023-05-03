import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  studentsPaymentRecord: [],
}

const PAYMENT_SLICE = {
  name: 'payment',
  initialState: STATE,
  reducers: {
    setStudentPaymentRecord: (state, action) => {
      const { record } = action.payload
      state.studentsPaymentRecord = record
    },
  },
}

const paymentSlice = createSlice(PAYMENT_SLICE)

export const { setStudentPaymentRecord } = paymentSlice.actions

export default paymentSlice.reducer

export const selectStudentsPaymentRecord = (state) =>
  state.payment.studentsPaymentRecord
