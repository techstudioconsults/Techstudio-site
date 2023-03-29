import { apiSlice } from '../../../../../app/api/apiSlice'
import { setClasses } from './classSlice'

export const coursesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getClassByCourseID: builder.mutation({
      query: (courseID) => ({
        url: `/class/${courseID}`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(
            setClasses({
              classes: data.data.classes,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),
    deleteClass: builder.mutation({
      query: (classID) => ({
        url: `/class/${classID}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const { useGetClassByCourseIDMutation, useDeleteClassMutation } =
  coursesApiSlice
