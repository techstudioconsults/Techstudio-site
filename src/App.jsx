// REACT DEFAULTS
import React from 'react'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// COMPONENTS
import {
  Accounts,
  AdminClassTab,
  ClassesTab,
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
  StudentSignup,
  ForgotPassword,
  AdminCourseView,
  CreateCourse,
  EditCourse,
  CreateClass,
  EditClass,
  CreateLesson,
  EditLesson,
} from './pages'

import AdminClassView from './pages/Dashboard/Admin/classes/AdminClassView'
import { DEVELOPMENT_CONTENT } from './pages/Development/content'
import RequireAuth from './hooks/RequireAuth'
import { ROLES } from './config/role'
import { selectClasses } from './pages/Dashboard/Admin/classes/api/classSlice'
import { useSelector } from 'react-redux'

const App = () => {
  const {
    frontendDevelopment,
    fullStackDevelopment,
    datascience,
    mobileDevelopment,
    UIUXDevelopment,
  } = DEVELOPMENT_CONTENT

  const classes = useSelector(selectClasses)

  console.log(classes)

  return (
    <Suspense fallback={<Loading text='LOADING...' />}>
      <Routes>
        {/* public routes */}
        <Route index path='/' element={<HomePage />} />
        <Route path='/tracks' element={<Intro />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/admin/register' element={<AdminSignup />} />
        <Route path='/student/signup' element={<StudentSignup />} />
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
              <Route
                index
                path='/admin/dashboard'
                element={<AdminDashboard />}
              />
              <Route path='/admin/courses' element={<AdminCourseView />} />
              <Route path='/admin/courses/create' element={<CreateCourse />} />
              <Route path='/admin/courses/:id/edit' element={<EditCourse />} />
              <Route path='/admin/classes' element={<AdminClassView />}>
                <Route
                  path=':class'
                  element={<AdminClassTab classes={classes} isTDB />}
                />
              </Route>
              <Route path='/admin/class/:id/create' element={<CreateClass />} />
              <Route path='/admin/class/:id/edit' element={<EditClass />} />
              <Route
                path='/admin/class/lesson/create'
                element={<CreateLesson />}
              />
              <Route path='/admin/class/lesson/edit' element={<EditLesson />} />
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
