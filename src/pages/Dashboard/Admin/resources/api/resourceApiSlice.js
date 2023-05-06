import { apiSlice } from '../../../../../app/api/apiSlice'
import { setResources } from './resourceSlice'

export const resourceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllResources: builder.mutation({
      query: () => ({
        url: `/resources`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          let resourcesFormatted = {
            audio: [],
            video: [],
            document: [],
          }

          data.data.forEach((category) => {
            resourcesFormatted.audio.push(...category.resources.audio)
            resourcesFormatted.video.push(...category.resources.video)
            resourcesFormatted.document.push(...category.resources.document)
          })
          dispatch(
            setResources({
              resources: resourcesFormatted,
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
        url: `/resources/${credentials.courseID}`,
        method: 'PATCH',
        body: { ...credentials.body },
      }),
    }),

    deleteResource: builder.mutation({
      query: (resourceID) => ({
        url: `/resources/${resourceID}`,
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
