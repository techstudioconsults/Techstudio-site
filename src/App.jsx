// REACT DEFAULTS
import React from 'react'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// COMPONENTS
import { Accounts, Loading, Payment } from './components'
import { DashboardLayout } from './layout'
import {
  AboutUs,
  AdminDashboard,
  Blog,
  ContactUs,
  Development,
  Employers,
  HomePage,
  Intro,
  Messages,
  SignIn,
  Signup,
  SingleBlogPage,
  SingleCourseView,
  StudentCalssesView,
  StudentDashboard,
  Tasks,
  TeacherClassView,
  TeacherDashboard,
} from './pages'
import AdminClassView from './pages/Dashboard/Admin/classes/AdminClassView'
import { DEVELOPMENT_CONTENT } from './pages/Development/content'

const App = () => {
  const {
    frontendDevelopment,
    fullStackDevelopment,
    datascience,
    mobileDevelopment,
    UIUXDevelopment,
  } = DEVELOPMENT_CONTENT

  return (
    <Suspense fallback={<Loading text='LOADING...' />}>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/tracks' element={<Intro />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/employers' element={<Employers />} />
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
        <Route path='/admin' element={<DashboardLayout isADB />}>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='classes' element={<AdminClassView />} />
          <Route path='messages' element={<Messages />} />
        </Route>
        <Route path='/student' element={<DashboardLayout />}>
          <Route path='dashboard' element={<StudentDashboard />} />
          <Route path='classes' element={<StudentCalssesView />} />
          <Route path='classes/single-class' element={<SingleCourseView />} />
          <Route path='messages' element={<Messages />} />
        </Route>
        <Route path='/teacher' element={<DashboardLayout isTDB />}>
          <Route path='dashboard' element={<TeacherDashboard />} />
          <Route path='classes' element={<TeacherClassView />} />
          <Route path='classes/single-class' element={<SingleCourseView />} />
          <Route path='messages' element={<Messages />} />
          <Route path='tasks' element={<Tasks />} />
        </Route>
      </Routes>
      {/* dashboard routes */}
    </Suspense>
  )
}

export default App
