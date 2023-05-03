import { apiSlice } from '../../../../app/api/apiSlice'
import { setCards, setResources } from './dashboardSlice'

export const dashboardApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCardInfo: builder.mutation({
      query: () => ({
        url: `/dashboard/cards`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled

          dispatch(
            setCards({
              cards: data.data,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    dashboardAllResources: builder.mutation({
      query: (courseID) => ({
        url: `/dashboard/courses/${courseID}/resources`,
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

    dashboardAllTutors: builder.mutation({
      query: () => ({
        url: `/dashboard/tutors`,
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          // dispatch(
          //   setClasses({
          //     cards: data.data,
          //   })
          // )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    dashboardSearch: builder.mutation({
      query: (query) => ({
        url: `/search?search=${query}`,
        method: 'GET',
      }),
    }),
  }),
})

export const {
  useGetCardInfoMutation,
  useDashboardAllResourcesMutation,
  useDashboardAllTutorsMutation,
  useDashboardSearchMutation,
} = dashboardApiSlice
