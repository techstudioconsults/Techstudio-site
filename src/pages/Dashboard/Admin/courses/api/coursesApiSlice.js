import { apiSlice } from '../../../../../app/api/apiSlice'

import { setCourseDetails, setCourses } from './coursesSlice'

export const coursesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (credentials) => ({
        url: '/courses',
        method: 'POST',
        Headers: { 'Content-type': 'multipart/form-data' },
        body: { ...credentials },
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
        } catch (err) {
          console.log(err)
        }
      },
    }),

    // this temporary===========

    createClass: builder.mutation({
      query: (credentials) => ({
        url: `/classes/${credentials.courseID}`,
        method: 'POST',
        Headers: { 'Content-type': 'multipart/form-data' },
        body: { ...credentials.body },
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
        } catch (err) {
          console.log(err)
        }
      },
    }),
    // updateCourse: builder.mutation({
    //   query: (credentials) => ({
    //     url: `/course${}`,
    //     method: 'PATCH',
    //     Headers: { 'Content-type': 'multipart/form-data' },
    //     body: { ...credentials },
    //   }),
    //   async onQueryStarted(arg, { queryFulfilled }) {
    //     try {
    //       const { data } = await queryFulfilled
    //       console.log(data)
    //     } catch (err) {
    //       console.log(err)
    //     }
    //   },
    // }),
    getTutors: builder.mutation({
      query: () => ({
        url: '/courses/tutors',
        method: 'GET',
      }),
    }),
    viewAllCourses: builder.mutation({
      query: () => ({
        url: '/courses',
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(
            setCourses({
              courses: data.data,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),
    viewCoursesDetails: builder.mutation({
      query: (courseID) => ({
        url: `/courses/${courseID}`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          // console.log(data)
          dispatch(
            setCourseDetails({
              courseDetails: data.data,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),
    deleteCourse: builder.mutation({
      query: (courseID) => ({
        url: `/courses/${courseID}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useCreateCourseMutation,
  useCreateClassMutation,
  useGetTutorsMutation,
  useViewAllCoursesMutation,
  useViewCoursesDetailsMutation,
  useDeleteCourseMutation,
} = coursesApiSlice
