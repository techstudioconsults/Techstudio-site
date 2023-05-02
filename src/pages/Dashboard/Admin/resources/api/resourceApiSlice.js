import { apiSlice } from '../../../../../app/api/apiSlice'
import { setResources } from './resourceSlice'

export const resourceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllResources: builder.mutation({
      query: () => ({
        url: `/resource`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          dispatch(
            setResources({
              resources: data.data,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    getResourcesByCourseID: builder.mutation({
      query: (courseID) => ({
        url: `/resources/courses/${courseID}`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          dispatch(
            setResources({
              resources: data.data.resources,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    addNewResource: builder.mutation({
      query: (credentials) => ({
        url: `/resource/${credentials.courseID}`,
        method: 'PATCH',
        body: { ...credentials.body },
      }),
    }),

    deleteResource: builder.mutation({
      query: (resourceID) => ({
        url: `/resource/${resourceID}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetAllResourcesMutation,
  useGetResourcesByCourseIDMutation,
  useAddNewResourceMutation,
  useDeleteResourceMutation,
} = resourceApiSlice
