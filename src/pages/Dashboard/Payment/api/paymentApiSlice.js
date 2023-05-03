import { apiSlice } from '../../../../app/api/apiSlice'
import { setStudentPaymentRecord } from './paymentSlice'

export const dashboardApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRevenueInfo: builder.mutation({
      query: () => ({
        url: `/payments`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled

          // dispatch(
          //   setCards({
          //     cards: data.data,
          //   })
          // )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    getStudentPaymentRecords: builder.mutation({
      query: () => ({
        url: `/payments/students`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          dispatch(
            setStudentPaymentRecord({
              record: data.data,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),
    getStudentPaymentRecordsByIDs: builder.mutation({
      query: (credentials) => ({
        url: `/payments/students/courses/${credentials.courseID}?status=${credentials.status}&classId=${credentials.classId}`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          dispatch(
            setStudentPaymentRecord({
              record: data.data,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    getSingleStudentPaymentRecords: builder.mutation({
      query: (studentID) => ({
        url: `/payments/students/${studentID}`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)

          // dispatch(
          //   setCards({
          //     cards: data.data,
          //   })
          // )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    getStudentBalance: builder.mutation({
      query: (studentID) => ({
        url: `/payments/students/${studentID}/balance`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          // dispatch(
          //   setCards({
          //     cards: data.data,
          //   })
          // )
        } catch (err) {
          console.log(err)
        }
      },
    }),
  }),
})

export const {
  useGetRevenueInfoMutation,
  useGetStudentPaymentRecordsMutation,
  useGetSingleStudentPaymentRecordsMutation,
  useGetStudentPaymentRecordsByIDsMutation,
} = dashboardApiSlice
