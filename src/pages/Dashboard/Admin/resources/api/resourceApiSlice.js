import { apiSlice } from '../../../../../app/api/apiSlice'
import {} from '../../classes/api./../resources/api/classSlice'

export const resourceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllResources: builder.mutation({
      query: () => ({
        url: `/resource`,
        method: 'GET',
      }),
    }),

    addNewResource: builder.mutation({
      query: (courseID) => ({
        url: `/resource/${courseID}`,
        method: 'PATCH',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          dispatch()
        } catch (err) {
          console.log(err)
        }
      },
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
  useAddNewResourceMutation,
  useDeleteResourceMutation,
} = resourceApiSlice
