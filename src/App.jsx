// REACT DEFAULTS
import React from 'react'
import { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

// COMPONENTS
import {
  Accounts,
  AdminClassTab,
  ChangePassword,
  Loading,
  Payment,
} from './components'
import { DashboardLayout } from './layout'
import {
  AboutUs,
  AdminDashboard,
  Blog,
  ContactUs,
  Development,
  // Employers,
  HomePage,
  Intro,
  Messages,
  PageNotFound,
  SignIn,
  Register,
  SingleBlogPage,
  SingleCourseView,
  SingleCourseViewLive,
  StudentCalssesView,
  StudentDashboard,
  StudentDashboardIntro,
  Tasks,
  TeacherClassView,
  TeacherDashboard,
  AdminSignup,
  ForgotPassword,
  AdminCourseView,
  CreateCourse,
  EditCourse,
  CreateClass,
  EditClass,
  CreateLesson,
  EditLesson,
  AdminResourceView,
  ResourcesTab,
  Paymentpage,
  PaymentTabs,
  PaymentOptions,
} from './pages'

import AdminClassView from './pages/Dashboard/Admin/classes/AdminClassView'
import { DEVELOPMENT_CONTENT } from './pages/Development/content'
import RequireAuth from './hooks/RequireAuth'
import { ROLES } from './config/role'
import {
  selectClasses,
  selectLessons,
} from './pages/Dashboard/Admin/classes/api/classSlice'
import { useSelector } from 'react-redux'
import AdminUsersView from './pages/Dashboard/Admin/users/AdminUsersView'
import AdminUserListDisplay from './pages/Dashboard/Admin/users/userCourseTab/UsersListDisplay'
import TrackAnalysisLayout from './pages/Dashboard/Admin/components/tab/trackAnalysislayout/TrackAnalysisLayout'
import OPTVerification from './pages/Auth/OTP/OTPVerification'
import { selectUserType } from './app/api/appSlice'
import StudentListDisplay from './pages/Dashboard/Admin/users/userCourseTab/StudentListDisplay'

const App = () => {
  const {
    frontendDevelopment,
    fullStackDevelopment,
    datascience,
    mobileDevelopment,
    UIUXDevelopment,
  } = DEVELOPMENT_CONTENT

  const classes = useSelector(selectClasses)
  const lessons = useSelector(selectLessons)
  const userType = useSelector(selectUserType)

  return (
    <Suspense fallback={<Loading text='LOADING...' />}>
      <Routes>
        {/* public routes */}
        <Route index path='/' element={<HomePage />} />
        <Route path='/tracks' element={<Intro />} />
        <Route path='/student/register' element={<Register />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/verify-otp' element={<OPTVerification />} />
        <Route path='/change-password/:token' element={<ChangePassword />} />
        <Route path='/admin/register' element={<AdminSignup />} />
        {/* <Route path='/student/signup' element={<StudentSignup />} /> */}
        <Route path='/payment' element={<Payment />} />
        {/* <Route path='/employers' element={<Employers />} /> */}
        <Route path='/payment/accounts' element={<Accounts />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<SingleBlogPage />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route
          path='/course/frontend'
          element={<Development content={frontendDevelopment} />}
        />
        <Route
          path='/course/fullstack'
          element={<Development content={fullStackDevelopment} />}
        />
        <Route
          path='/course/uiux'
          element={<Development content={UIUXDevelopment} />}
        />
        <Route
          path='/course/data-science'
          element={<Development content={datascience} />}
        />
        <Route
          path='/course/mobile'
          element={<Development content={mobileDevelopment} />}
        />

        {/* protected Routes */}
        {/* <Route element={<PersistLogin />}> */}
        <Route
          element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
        >
          {/* admin routes */}
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route element={<DashboardLayout isADB />}>
              <Route path='/admin/dashboard' element={<AdminDashboard />}>
                <Route path=':courseID' element={<TrackAnalysisLayout />} />
              </Route>
              <Route path='/admin/courses' element={<AdminCourseView />} />
              <Route path='/admin/courses/create' element={<CreateCourse />} />
              <Route path='/admin/courses/:id/edit' element={<EditCourse />} />
              <Route path='/admin/classes' element={<AdminClassView />}>
                <Route
                  path=':courseID'
                  element={
                    <AdminClassTab lessons={lessons} classes={classes} isTDB />
                  }
                />
              </Route>
              <Route
                path='/admin/class/:courseID/create'
                element={<CreateClass />}
              />
              <Route path='/admin/class/:id/edit' element={<EditClass />} />
              <Route
                path='/admin/class/:courseID/lesson/create'
                element={<CreateLesson />}
              />
              <Route
                path='/admin/class/:id/lesson/edit'
                element={<EditLesson />}
              />
              <Route path='/admin/resources' element={<AdminResourceView />}>
                <Route path=':resource' element={<ResourcesTab />} />
              </Route>
              <Route path='/admin/users' element={<AdminUsersView />}>
                <Route
                  index
                  path=':courseID'
                  element={
                    userType === `tutor` ? (
                      <AdminUserListDisplay />
                    ) : (
                      <StudentListDisplay />
                    )
                  }
                />
              </Route>
              {/* PAYMENT ROUTE */}
              <Route path='/admin/payment' element={<Paymentpage />}>
                <Route path='courses/:courseID' element={<PaymentOptions />} />
              </Route>
            </Route>
          </Route>
          {/* student routes */}
          <Route
            element={
              <RequireAuth allowedRoles={[ROLES.Admin, ROLES.Student]} />
            }
          >
            <Route element={<DashboardLayout />}>
              <Route
                index
                path='/student/welcome'
                element={<StudentDashboardIntro />}
              />
              <Route path='/student/dashboard' element={<StudentDashboard />} />
              <Route path='/student/classes' element={<StudentCalssesView />} />
              <Route
                path='/student/classes/single-live-class'
                element={<SingleCourseViewLive />}
              />
              <Route
                path='/student/classes/single-recorded-class'
                element={<SingleCourseView />}
              />
              <Route path='student/messages' element={<Messages />} />
            </Route>
          </Route>
          {/* tutors routes */}
          <Route
            element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Tutor]} />}
          >
            <Route element={<DashboardLayout isTDB />}>
              <Route
                index
                path='/tutor/dashboard'
                element={<TeacherDashboard />}
              />
              <Route path='tutor/classes' element={<TeacherClassView />} />
              <Route
                path='/tutor/classes/single-class'
                element={<SingleCourseView />}
              />
              <Route path='/tutor/messages' element={<Messages />} />
              <Route path='/tutor/tasks' element={<Tasks />} />
            </Route>
          </Route>
        </Route>
        {/* </Route> */}
        {/* End of protected route */}
        {/* 404 PAGE NOT FOUND ROUTE */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      {/* dashboard routes */}
    </Suspense>
  )
}

export default App
