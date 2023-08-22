import { apiSlice } from '../../../app/api/apiSlice'

import { setUpcomingCourses } from './externalSlice'

export const externalApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUpcomingCourses: builder.mutation({
      query: () => ({
        url: '/external/courses',
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setUpcomingCourses(data.data))
        } catch (err) {
          console.log(err)
        }
      },
    }),
  }),
})

export const { useGetUpcomingCoursesMutation } = externalApiSlice
