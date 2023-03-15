import { apiSlice } from '../../../../../app/api/apiSlice'

export const coursesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (credentials) => ({
        url: '/course',
        method: 'POST',
        Headers: { 'Content-type': 'multipart/form-data' },
        body: { ...credentials },
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          // dispatch(
          //   setCredentials({
          //     accessToken: data.data.accessToken,
          //     refreshToken: data.data.refreshToken,
          //   })
          // )
        } catch (err) {
          console.log(err)
        }
      },
    }),
    getTutors: builder.mutation({
      query: () => ({
        url: '/course/tutors',
        method: 'GET',
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
  }),
})

export const { useCreateCourseMutation, useGetTutorsMutation } = coursesApiSlice
