import { apiSlice } from '../../../app/api/apiSlice'

import { logOut, setCredentials } from './authSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: `/auth/login`,
        method: 'POST',
        body: { ...credentials },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(
            setCredentials({
              accessToken: data.data.accessToken,
              refreshToken: data.data.refreshToken,
            })
          )
        } catch (err) {
          console.log(err)
        }
      },
    }),

    registerStudent: builder.mutation({
      query: (credentials) => ({
        url: `/auth/register?courseId=${credentials.courseID}`,
        method: 'POST',
        body: { ...credentials.body },
      }),
    }),

    registerAdmin: builder.mutation({
      query: (credentials) => ({
        url: '/auth/register/admin',
        method: 'POST',
        body: { ...credentials },
      }),
    }),

    setNewPassword: builder.mutation({
      query: (credentials) => ({
        url: '/auth/set-password',
        method: 'POST',
        body: { ...credentials },
      }),
    }),

    signupStudent: builder.mutation({
      query: (credentials) => ({
        url: '/auth/signup',
        method: 'POST',
        body: { ...credentials },
      }),
    }),

    contactUs: builder.mutation({
      query: (credentials) => ({
        url: '/mailing/contactus',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    forgotPassword: builder.mutation({
      query: (credentials) => ({
        url: '/auth/forgot-password',
        method: 'PATCH',
        body: { ...credentials },
      }),
    }),

    getOTP: builder.mutation({
      query: (credentials) => ({
        url: '/mailing/otp',
        method: 'POST',
        body: { ...credentials },
      }),
    }),

    verifyOTP: builder.mutation({
      query: (credentials) => ({
        url: '/auth/otp',
        method: 'POST',
        body: { ...credentials },
      }),
    }),

    sendLogout: builder.mutation({
      query: (credentials) => ({
        url: '/auth/logout',
        method: 'DELETE',
        body: { ...credentials },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          dispatch(logOut())
          // setTimeout(() => {
          //   dispatch(apiSlice.util.resetApiState())
          // }, 1000)
        } catch (err) {
          console.log(err)
        }
      },
    }),

    refresh: builder.mutation({
      query: (credentials) => ({
        url: '/auth/token',
        method: 'POST',
        body: { ...credentials },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          const { accessToken } = data
          dispatch(setCredentials({ accessToken }))
        } catch (err) {
          console.log(err)
        }
      },
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterStudentMutation,
  useRegisterAdminMutation,
  useSendLogoutMutation,
  useSignupStudentMutation,
  useRefreshMutation,
  useContactUsMutation,
  useForgotPasswordMutation,
  useSetNewPasswordMutation,
  useGetOTPMutation,
  useVerifyOTPMutation,
} = authApiSlice
