import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { selectUserType } from './app/api/appSlice'
import { ROLES } from './config/role'
import RequireAuth from './hooks/RequireAuth'
import OPTVerification from './pages/Auth/OTP/OTPVerification'
import AdminClassView from './pages/Dashboard/Admin/classes/AdminClassView'
import {
  selectClasses,
  selectLessons,
} from './pages/Dashboard/Admin/classes/api/classSlice'
import TrackAnalysisLayout from './pages/Dashboard/Admin/components/tab/trackAnalysislayout/TrackAnalysisLayout'
import AdminUsersView from './pages/Dashboard/Admin/users/AdminUsersView'
import StudentListDisplay from './pages/Dashboard/Admin/users/userCourseTab/StudentListDisplay'
import AdminUserListDisplay from './pages/Dashboard/Admin/users/userCourseTab/UsersListDisplay'
import { DEVELOPMENT_CONTENT } from './pages/Externals/Development/content'
import JobRequirementModal from './pages/Externals/Employers/jobRequirement/JobRequirementModal'
// COMPONENTS
import { Accounts, AdminClassTab, ChangePassword, Payment } from './components'
import { DashboardLayout } from './layout'

const HomePage = lazy(() => import('./pages/Externals/Home'))
const AboutUs = lazy(() => import('./pages/Externals/AboutUs'))
const Intro = lazy(() => import('./pages/Externals/Intro'))
const Faq = lazy(() => import('./pages/Externals/Faqs'))
const Register = lazy(() => import('./pages/Auth/studentRegistration/Register'))
const SignIn = lazy(() => import('./pages/Auth/login/SignIn'))
const ForgotPassword = lazy(() =>
  import('./pages/Auth/forgotPassword/ForgotPassword')
)
const AdminSignup = lazy(() =>
  import('./pages/Auth/adminSignup/AdminRegistration')
)
const Employers = lazy(() => import('./pages/Externals/Employers'))
const ContactUs = lazy(() => import('./pages/Externals/ContactUs'))
const Development = lazy(() => import('./pages/Externals/Development'))

import SpinnerComponent from './components/global/skeletonLoader/SpinnerComponent'
import { RecentTask } from './pages/Dashboard/Teacher/components/recentTask/RecentTask'
import TutorClassTab from './pages/Dashboard/Teacher/components/tab/classTab/TutorClassTab'
import TutorLessonTab from './pages/Dashboard/Teacher/components/tab/lessonTab/TutorLessonTab'
import TutorResourceTab from './pages/Dashboard/Teacher/components/tab/ResourceTab/TutorResourceTabView'
import SubmissionListView from './pages/Dashboard/Teacher/tasks/SubmissionListView'
import {
  AdminCourseView,
  AdminDashboard,
  AdminPaymentView,
  AdminResourceView,
  Blog,
  CreateClass,
  CreateCourse,
  CreateLesson,
  EditClass,
  EditCourse,
  EditLesson,
  Messages,
  PageNotFound,
  PaymentListView,
  ResourcesTab,
  SingleBlogPage,
  SingleCourseView,
  SingleCourseViewLive,
  StudentCalssesView,
  StudentDashboard,
  StudentDashboardIntro,
  Tasks,
  TeacherClassView,
  TeacherDashboard,
} from './pages'

const App = () => {
  // const location = useLocation()

  // const [displayLocation, setDisplayLocation] = useState(location)
  // const [transitionStage, setTransistionStage] = useState('fadeIn')

  // useEffect(() => {
  //   if (location !== displayLocation) setTransistionStage('fadeOut')
  // }, [location, displayLocation])

  const { fullStackDevelopment, datascience, UIUXDevelopment } =
    DEVELOPMENT_CONTENT

  const classes = useSelector(selectClasses)
  const lessons = useSelector(selectLessons)
  const userType = useSelector(selectUserType)

  return (
    <Suspense
      fallback={
        <div
          style={{ width: `100%`, height: `100vh` }}
          className='d-flex align-items-center justify-content-center'
        >
          <SpinnerComponent />
        </div>
      }
    >
      {/* <div
        className={`${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === 'fadeOut') {
            setTransistionStage('fadeIn')
            setDisplayLocation(location)
          }
        }}
      > */}
      {/* <Routes location={displayLocation}> */}
      <Routes>
        {/* public routes */}
        <Route index path='/' element={<HomePage />} />
        <Route path='/our-courses' element={<Intro />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/student/register' element={<Register />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/verify-otp' element={<OPTVerification />} />
        <Route path='/change-password/:token' element={<ChangePassword />} />
        <Route path='/admin/register' element={<AdminSignup />} />
        {/* <Route path='/student/signup' element={<StudentSignup />} /> */}
        <Route path='/payment' element={<Payment />} />
        <Route path='/employers' element={<Employers />} />
        <Route
          path='/employers/detailedform'
          element={<JobRequirementModal />}
        />
        <Route path='/payment/accounts' element={<Accounts />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<SingleBlogPage />} />
        <Route path='/contact' element={<ContactUs />} />
        {/* <Route
          path='/course/frontend'
          element={
            <Development
              content={frontendDevelopment}
              job={`Frontend Web Developer`}
            />
          }
        /> */}
        <Route
          path='/course/fullstack'
          element={
            <Development
              content={fullStackDevelopment}
              job={`Fullstack Web Developer`}
            />
          }
        />
        <Route
          path='/course/product-design'
          element={
            <Development content={UIUXDevelopment} job={`Product Designer`} />
          }
        />
        <Route
          path='/course/data-science'
          element={<Development content={datascience} job={`Data Scientist`} />}
        />
        {/* <Route
          path='/course/mobile'
          element={
            <Development
              content={mobileDevelopment}
              job={`Frontend Developer`}
            />
          }
        /> */}
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
              <Route path='/admin/payment' element={<AdminPaymentView />}>
                <Route path='courses/:courseID' element={<PaymentListView />} />
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
              <Route path='tutor/classes' element={<TeacherClassView />}>
                <Route path=':id/class' element={<TutorClassTab />} />
                <Route path=':id/lesson' element={<TutorLessonTab />} />
              </Route>
              <Route
                path='/tutor/class/lesson/create'
                element={<CreateLesson />}
              />
              <Route
                path='/tutor/classes/single-class'
                element={<SingleCourseView />}
              />
              <Route path='/tutor/messages' element={<Messages />} />
              <Route path='/tutor/tasks' element={<Tasks />} />
              <Route
                path='/tutor/tasks/submission'
                element={<SubmissionListView />}
              />
              <Route
                path='/tutor/resources/all'
                element={<TutorResourceTab />}
              />
            </Route>
          </Route>
        </Route>
        {/* </Route> */}
        {/* End of protected route */}
        {/* 404 PAGE NOT FOUND ROUTE */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      {/* </div> */}
      {/* dashboard routes */}
    </Suspense>
  )
}

export default App
