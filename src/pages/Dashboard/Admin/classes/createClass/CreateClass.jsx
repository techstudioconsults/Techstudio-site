/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import { useCallback, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Select from 'react-select'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
// import { useGetTutorsMutation } from '../api/coursesApiSlice'
// import axios from 'axios'
// import { useSelector } from 'react-redux'
// import { selectCurrentToken } from '../../../../Auth/api/authSlice'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import * as yup from 'yup'

import { AvatarDropdown, CancelModal, Portal, SaveSuccess, ToastComponent } from '../../../../../components'
import useToast from '../../../../../hooks/useToast'
import { selectCurrentToken } from '../../../../Auth/api/authSlice'
import { useViewCoursesDetailsMutation } from '../../courses/api/coursesApiSlice'
import { useGetResourcesByCourseIDMutation } from '../../resources/api/resourceApiSlice'

import style from '../../courses/createCourse/createCourse.module.scss'

const baseUrl = import.meta.env.VITE_BASE_URL

const colorStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
  }),
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: `#0266F41A`,
      color: '#A7A7A7',
      padding: `5px`,
      border: `1px solid #0266F4`,
      borderRadius: `5px`,
      marginRight: `10px`,
    }
  },
  multiValueRemove: (styles) => {
    return {
      ...styles,
      color: '#0266F4',
      cursor: 'pointer',
      ':hover': {
        color: '#0266F41',
      },
    }
  },
}

// const durationSelectInput = {
//   control: (styles) => ({
//     ...styles,
//     backgroundColor: 'white',
//     width: `168px`,
//     fontSize: `14px`,
//   }),
// }

const schema = yup.object().shape({
  title: yup.string().required('title is required'),
  fee: yup.string().required('fee is required'),
  description: yup.string().required('description is required'),
  tutors: yup.array().min(1, 'Please select at least one tutor').required('at least one tutor is required'),
  startDate: yup.string().required('when does the class start?'),
  endDate: yup.string().required('when does the class end?'),
  preference: yup.string().required('class preference required'),
})

const CreateClass = () => {
  const [crudeTutors, setCrudeTutors] = useState({})
  const [tutors, setTutors] = useState([])

  const [crudeResources, setCrudeResources] = useState([])
  const [resources, setResources] = useState([])

  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const token = useSelector(selectCurrentToken)
  // const location = useLocation()
  const { toast } = useToast()
  const { courseID } = useParams()
  const navigate = useNavigate()
  const [viewCoursesDetails] = useViewCoursesDetailsMutation()
  const [getResourcesByCourseID] = useGetResourcesByCourseIDMutation()

  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const getCourse = useCallback(async () => {
    const res = await viewCoursesDetails(courseID).unwrap()
    if (res.success) {
      setCrudeTutors(res.data.tutors)
    }
  }, [courseID, viewCoursesDetails])

  const getResourceForClass = useCallback(async () => {
    const res = await getResourcesByCourseID(courseID).unwrap()
    if (res.success) {
      console.log(res.data.resources)
      setCrudeResources([...res.data.resources.audio, ...res.data.resources.video, ...res.data.resources.document])
    }
  }, [courseID, getResourcesByCourseID])
  console.log(crudeResources, resources)

  const findTutors = (status) => {
    const tutors = crudeTutors[status]?.map((tutor) => {
      return {
        value: tutor.tutorId,
        label: `${tutor.firstName} ${tutor.lastName}`,
      }
    })
    setTutors(tutors)
  }

  useEffect(() => {
    getResourceForClass()
  }, [getResourceForClass])

  useEffect(() => {
    if (courseID !== undefined) {
      getCourse()
    } else {
      navigate(`/admin/courses/create`)
    }
  }, [courseID, getCourse, navigate])

  useEffect(() => {
    const resource = crudeResources?.map((resource) => {
      return {
        value: resource.id,
        label: resource.name,
      }
    })
    setResources(resource)
  }, [crudeResources])

  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  // due to the error gotten from the response above...we went with the axios alternative
  const onSubmit = async (data) => {
    setLoading(true)
    const formData = new FormData()

    // const files = [...data.files]

    formData.append(`title`, data.title)
    formData.append(`description`, data.description)
    // formData.append(`fee`, parseInt(data.fee))
    formData.append(`preference`, data.preference)
    formData.append(`startDate`, new Date(data.startDate).toISOString())
    formData.append(`endDate`, new Date(data.endDate).toISOString())
    data.tutors.forEach((item) => formData.append('tutors[]', item.value))
    data.resources?.forEach((item) => formData.append('resources[]', item.value || ``))

    const formdata = {
      title: data.title,
      description: data.description,
      fee: data.fee,
      preference: data.preference,
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
      tutors: data.tutors.map((tutor) => {
        return tutor.value
      }),
      resources: data?.resources?.map((resource) => {
        return resource.value
      }),
    }

    console.log(formdata)

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1])
    // }

    try {
      let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('save-success'))

      const res = await axios.post(`${baseUrl}/classes/${courseID}`, formdata, credentials)
      console.log(res)
      if (res.status === 201) {
        reset()
        setLoading(false)
        modal.show()
      }
    } catch (err) {
      setLoading(false)
      setErrorMessage(err.response.data.message)
      toast.show()
    }
  }
  // ==============================================================

  const handleCancelAction = (event) => {
    event.stopPropagation()
    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('cancel-modal'))
    modal.show()
  }

  return (
    <section className={style.courseView}>
      <ToastComponent errorMessage={errorMessage} />
      <Portal wrapperId='react-portal-modal-container'>
        <SaveSuccess
          content={{
            title: `Class Created Successfully!`,
            desc: `Kindly click continue to exit this page.`,
            courseID: courseID,
            action: `class`,
          }}
        />
        <CancelModal
          content={{
            action: `create`,
            routeAction: `class`,
            courseID: courseID,
          }}
        />
      </Portal>

      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0`].join(' ')}>Create Class</h4>
          <p className={style.subTitle}>Fill in the fields below to create a new class under a course.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='my-10 container'>
            {/* title */}
            <div className='mb-8 d-flex row'>
              <div className='col-4'>
                <label htmlFor='title' className={`col-form-label fs-lg ${style.labels} w-100`}>
                  Class Title
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100`}>
                  <input placeholder='class title' type='text' className='form-control form-control-lg' id='title' {...register('title')} />
                  <ErrorMessage
                    errors={errors}
                    name='title'
                    render={({ messages }) => {
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p className='fs-xs text-danger' key={type}>
                              {message}
                            </p>
                          ))
                        : null
                    }}
                  />
                </div>
              </div>
            </div>
            {/* about course */}
            <div className='mb-8 row'>
              <div className='col-4'>
                <label htmlFor='description' className={`col-form-label fs-lg ${style.labels} w-100`}>
                  Description
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100`}>
                  <textarea
                    maxLength='500'
                    placeholder='class description'
                    type='text'
                    className='form-control form-control-lg'
                    id='description'
                    {...register('description')}
                  />
                  <ErrorMessage
                    errors={errors}
                    name='description'
                    render={({ messages }) => {
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p className='fs-xs text-danger' key={type}>
                              {message}
                            </p>
                          ))
                        : null
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='mb-8 d-flex row'>
              <div className='col-4'>
                <label htmlFor='title' className={`col-form-label fs-lg ${style.labels} w-100`}>
                  Fee
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100`}>
                  <input placeholder='class fee' type='text' className='form-control form-control-lg' id='fee' {...register('fee')} />
                  <ErrorMessage
                    errors={errors}
                    name='fee'
                    render={({ messages }) => {
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p className='fs-xs text-danger' key={type}>
                              {message}
                            </p>
                          ))
                        : null
                    }}
                  />
                </div>
              </div>
            </div>
            {/* duration (start-date and end-date) */}
            <div className='mb-8'>
              <div className='d-flex  row'>
                <div className='col-4'>
                  <p className={`col-form-label fs-lg ${style.labels} w-100`}>Start Date</p>
                </div>
                <div className='col-8'>
                  <div className={`${style.inputs} d-flex flex-column justify-content-between w-100`}>
                    <input type='date' className='form-control form-control-lg' id='start-date' {...register('startDate')} />
                    <ErrorMessage
                      errors={errors}
                      name='startDate'
                      render={({ messages }) => {
                        return messages
                          ? Object.entries(messages).map(([type, message]) => (
                              <p className='fs-xs text-danger' key={type}>
                                {message}
                              </p>
                            ))
                          : null
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='mb-8'>
              <div className='d-flex  row'>
                <div className='col-4'>
                  <p className={`col-form-label fs-lg ${style.labels} w-100`}>End Date</p>
                </div>
                <div className='col-8'>
                  <div className={`${style.inputs} d-flex flex-column justify-content-between w-100`}>
                    <input type='date' className='form-control form-control-lg' id='end-date' {...register('endDate')} />
                    <ErrorMessage
                      errors={errors}
                      name='endDate'
                      render={({ messages }) => {
                        return messages
                          ? Object.entries(messages).map(([type, message]) => (
                              <p className='fs-xs text-danger' key={type}>
                                {message}
                              </p>
                            ))
                          : null
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* preferences */}
            <div className='mb-8 d-flex  row'>
              <div className='col-4'>
                <label htmlFor='title' className={`col-form-label fs-lg ${style.labels} w-100 p-0`}>
                  Preference
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100 d-flex  justify-content-between`}>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input me-2'
                      type='radio'
                      name='preference'
                      id='online'
                      value='online'
                      onClick={() => findTutors(`online`)}
                      {...register('preference')}
                    />
                    <label htmlFor='online' className='form-check-label'>
                      online
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input me-2'
                      type='radio'
                      name='preference'
                      id='weekday'
                      value='weekday'
                      onClick={() => findTutors(`weekday`)}
                      {...register('preference')}
                    />
                    <label htmlFor='weekday' className='form-check-label'>
                      weekday
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input me-2'
                      type='radio'
                      name='preference'
                      id='weekend'
                      value='weekend'
                      onClick={() => findTutors(`weekend`)}
                      {...register('preference')}
                    />
                    <label htmlFor='weekend' className='form-check-label'>
                      weekend
                    </label>
                  </div>
                </div>
                <ErrorMessage
                  errors={errors}
                  name='preference'
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <p className='fs-xs text-danger' key={type}>
                            {message}
                          </p>
                        ))
                      : null
                  }}
                />
              </div>
            </div>

            {/* tutors */}
            <div className='mb-8 row'>
              <div className='col-4'>
                <label htmlFor='tutors' className={`col-form-label fs-lg ${style.labels}`}>
                  Tutors
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100`}>
                  <div>
                    <Controller
                      name='tutors'
                      control={control}
                      render={({ field }) => {
                        return (
                          <>
                            <Select styles={colorStyles} className='reactSelect my-2' placeholder='select tutors' options={tutors} isMulti {...field} />
                          </>
                        )
                      }}
                    />
                    <ErrorMessage
                      errors={errors}
                      name='tutors'
                      render={({ messages }) => {
                        return messages
                          ? Object.entries(messages).map(([type, message]) => (
                              <p className='fs-xs text-danger' key={type}>
                                {message}
                              </p>
                            ))
                          : null
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Resource */}
            <div className='mb-8 d-flex row'>
              <div className='col-4'>
                <label htmlFor='resources' className={`col-form-label fs-lg ${style.labels} w-100`}>
                  Resources
                </label>
              </div>
              <div className='col-8'>
                <div className={`${style.inputs} w-100`}>
                  <div>
                    <Controller
                      name='resources'
                      control={control}
                      render={({ field }) => {
                        return (
                          <>
                            <Select
                              styles={colorStyles}
                              className='reactSelect my-2'
                              name='resource'
                              placeholder='Select a resource from the dropdown list'
                              options={resources}
                              isMulti
                              {...field}
                            />
                          </>
                        )
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* file chooser */}
            {/* <section>
              <div className='mb-8 align-items-center row'>
                <div className='col-4'>
                  <label
                    htmlFor='resource'
                    className={`col-form-label fs-lg ${style.labels}`}
                  >
                    Resources
                  </label>
                </div>
                <div className='col-8'>
                  <div className={`${style.inputs} w-100`}>
                    <div
                      className={
                        (style.inputs,
                        `d-flex align-items-center w-100 border border-1 p-5 rounded-2`)
                      }
                    >
                      <input
                        id='resource'
                        type='file'
                        multiple
                        {...register('files')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            {/* CTA */}
            <div className='d-flex gap-10 justify-content-end my-8 row'>
              <div className={`w-100 text-end`}>
                <button disabled={isLoading} type='submit' className='btn btn-primary w-25 me-10'>
                  <div hidden={!isLoading} className='spinner-border spinner-border-sm me-5 text-white' role='status' />
                  {isLoading ? `Please wait...` : `Save Class`}
                </button>
                <button type='button' onClick={handleCancelAction} className='btn btn-outline-danger w-25 dont-delete-btn'>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={style.notification}>
        <div className='d-flex justify-content-end'>
          <AvatarDropdown />
        </div>
      </div>
    </section>
  )
}

export default CreateClass
