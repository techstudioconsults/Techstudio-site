import { apiSlice } from '../../../../../app/api/apiSlice'
import { setClasses, setLessons } from './classSlice'

export const coursesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getClassByCourseID: builder.mutation({
      query: (courseID) => ({
        url: `/classes/${courseID}`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(
            setClasses({
              classes: data.data,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    getLessonByCourseID: builder.mutation({
      query: (courseID) => ({
        url: `/lessons/course/${courseID}`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled

          dispatch(
            setLessons({
              lessons: data.data,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    deleteClass: builder.mutation({
      query: (classID) => ({
        url: `/classes/${classID}`,
        method: 'DELETE',
      }),
    }),

    deleteLesson: builder.mutation({
      query: (lessonID) => ({
        url: `/lessons/${lessonID}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetClassByCourseIDMutation,
  useGetLessonByCourseIDMutation,
  useDeleteClassMutation,
  useDeleteLessonMutation,
} = coursesApiSlice
