import { apiSlice } from '../../../../../app/api/apiSlice'
import { setStudents, setTutors, setTutorsByCourseID } from './usersSlice'

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTutors: builder.mutation({
      query: () => ({
        url: `/users/tutors`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          // console.log(data)
          dispatch(
            setTutors({
              tutors: data.data,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    getAllStudents: builder.mutation({
      query: () => ({
        url: `/users/students`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          dispatch(
            setStudents({
              students: data.data,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    getTutorsByCourseID: builder.mutation({
      query: (courseID) => ({
        url: `/users/tutors/${courseID}`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          // console.log(data)
          dispatch(
            setTutors({
              tutors: data.data,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    getStudentsByCourseID: builder.mutation({
      query: (courseID) => ({
        url: `/users/students/${courseID}`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          dispatch(
            setStudents({
              students: data.data,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    downloadAllTutors: builder.mutation({
      query: () => ({
        url: `/users/tutors/download`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
        } catch (err) {
          console.log(err)
        }
      },
    }),
  }),
})

export const {
  useGetAllTutorsMutation,
  useGetAllStudentsMutation,
  useGetTutorsByCourseIDMutation,
  useGetStudentsByCourseIDMutation,
  useDownloadAllTutorsMutation,
} = usersApiSlice
