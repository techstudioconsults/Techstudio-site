import { apiSlice } from '../../../../../app/api/apiSlice'
import { setClasses, setLessons } from './classSlice'

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
        url: `/lesson/course/${courseID}`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
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
        url: `/class/${classID}`,
        method: 'DELETE',
      }),
    }),

    deleteLesson: builder.mutation({
      query: (lessonID) => ({
        url: `/lesson/${lessonID}`,
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
