/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import { AvatarDropdown } from '../../../../../components'
import style from './createCourse.module.scss'
import Select from 'react-select'
import { Controller, useForm } from 'react-hook-form'
import { useCreateCourseMutation } from '../api/coursesApiSlice'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../../../../Auth/api/authSlice'

const baseUrl = process.env.REACT_APP_BASE_URL

const selectOptions = [
  { value: '640ac66f9db6823bc6b3e11d', label: 'Kingsley' },
  { value: '640ac66f9db6823bc6b3e11d', label: 'Afeeze' },
  { value: '640ac66f9db6823bc6b3e11d', label: 'Aisha' },
  { value: '640ac66f9db6823bc6b3e11d', label: 'Tobi' },
]

const CreateCourse = () => {
  const [CreateCourse] = useCreateCourseMutation()
  const token = useSelector(selectCurrentToken)
  const credentials = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }

  const { register, handleSubmit, control } = useForm({
    criteriaMode: 'all',
    mode: 'onChange',
  })

  // =============================================================================
  // this code block works with RTK Query --- kept getting error from frile upload
  // =============================================================================

  // const onSubmit = async (data) => {
  //   const formData = new FormData()
  //   const duration = {
  //     online: data.onlineClass,
  //     weekday: data.weekdayClass,
  //     weekend: data.weekendClass,
  //   }
  //   const tutors = data.tutors.map((obj) => obj.value)
  //   const files = [...data.files]

  //   formData.append(`title`, data.title)
  //   formData.append(`description`, data.description)

  //   Object.keys(duration).forEach((key) => {
  //     if (typeof duration[key] !== 'object')
  //       formData.append(`duration[${key}]`, duration[key])
  //     else formData.append(key, JSON.stringify(duration[key]))
  //   })

  //   files.forEach((item) => formData.append('files', item))
  //   tutors.forEach((item) => formData.append('tutors[]', item))

  //   try {
  //     await CreateCourse(formData).unwrap()
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // ================================================================================

  // due to the error gotten from the response above...we went with the axios alternative
  const onSubmit = async (data) => {
    const formData = new FormData()
    const duration = {
      online: data.onlineClass,
      weekday: data.weekdayClass,
      weekend: data.weekendClass,
    }
    const tutors = data.tutors.map((obj) => obj.value)
    const files = [...data.files]

    formData.append(`title`, data.title)
    formData.append(`description`, data.description)

    Object.keys(duration).forEach((key) => {
      if (typeof duration[key] !== 'object')
        formData.append(`duration[${key}]`, duration[key])
      else formData.append(key, JSON.stringify(duration[key]))
    })
    files.forEach((item) => formData.append('files', item))
    tutors.forEach((item) => formData.append('tutors[]', item))

    const res = await axios.post(`${baseUrl}/course`, formData, credentials)
    console.log(res)
  }

  return (
    <section className={style.courseView}>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0`].join(' ')}>Create Courses</h4>
          <p className={style.subTitle}>
            Fill in the fields below to create a new course.
          </p>
        </div>
        <div className='my-10'>
          <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
            {/* title */}
            <div className='mb-8 d-flex align-items-center '>
              <label
                htmlFor='title'
                className={`col-form-label fs-2xl ${style.labels}`}
              >
                Title
              </label>
              <div className={style.inputs}>
                <input
                  placeholder='Placeholder Text'
                  type='text'
                  className='form-control form-control-lg'
                  id='title'
                  {...register('title')}
                />
              </div>
            </div>
            {/* about course */}
            <div className='mb-8 d-flex'>
              <label
                htmlFor='description'
                className={`col-form-label fs-2xl ${style.labels}`}
              >
                About Courses
              </label>
              <div className={style.inputs}>
                <textarea
                  placeholder='Placeholder Text'
                  type='text'
                  className='form-control form-control-lg'
                  id='description'
                  {...register('description')}
                />
              </div>
            </div>
            {/* duration */}
            <div className='mb-8 d-flex'>
              <p
                // htmlFor='duration'
                className={`col-form-label fs-2xl ${style.labels}`}
              >
                Duration
              </p>
              <div
                className={(style.inputs, `d-flex align-items-center gap-8`)}
              >
                <div className='d-flex gap-8'>
                  {/* online */}
                  <div>
                    <label htmlFor='online'>online</label>
                    <select
                      id='online'
                      className='form-select form-select-lg mt-2'
                      aria-label='.form-select-lg example'
                      {...register('onlineClass')}
                    >
                      <option value='1'>1 Month</option>
                      <option value='2'>2 Month</option>
                      <option value='3'>3 Month</option>
                      <option value='4'>4 Month</option>
                    </select>
                  </div>
                  {/* weekday */}
                  <div>
                    <label htmlFor='weekday'>weekday</label>
                    <select
                      id='weekday'
                      className='form-select form-select-lg mt-2'
                      aria-label='.form-select-lg example'
                      {...register('weekdayClass')}
                    >
                      <option value='1'>1 Month</option>
                      <option value='2'>2 Month</option>
                      <option value='3'>3 Month</option>
                      <option value='4'>4 Month</option>
                    </select>
                  </div>
                  {/* weekend */}
                  <div>
                    <label htmlFor='weekend'>weekend</label>
                    <select
                      id='weekend'
                      className='form-select form-select-lg mt-2'
                      aria-label='.form-select-lg example'
                      {...register('weekendClass')}
                    >
                      <option value='1'>1 Month</option>
                      <option value='2'>2 Month</option>
                      <option value='3'>3 Month</option>
                      <option value='4'>4 Month</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* tutors */}
            <div className='mb-8 d-flex'>
              <label
                htmlFor='title'
                className={`col-form-label fs-2xl ${style.labels}`}
              >
                Tutors
              </label>
              <div className={style.inputs}>
                <div>
                  {/* <label htmlFor='online'>online</label> */}
                  <Controller
                    name='tutors'
                    control={control}
                    render={({ field }) => {
                      return (
                        <>
                          <Select
                            className='reactSelect my-2'
                            name='tutors'
                            placeholder='Select Tutors'
                            options={selectOptions}
                            isMulti
                            {...field}
                          />
                        </>
                      )
                    }}
                  />
                </div>
                {/* <div>
                  <label htmlFor='weekday'>weekday</label>
                  <Controller
                    name='tutors-weekday'
                    control={control}
                    render={({ field }) => {
                      return (
                        <>
                          <Select
                            className='reactSelect my-2'
                            name='tutors-weekday'
                            placeholder='Select Tutors'
                            options={selectOptions}
                            isMulti
                            {...field}
                          />
                        </>
                      )
                    }}
                  />
                </div> */}
                {/* <div>
                  <label htmlFor='weekend'>weekend</label>
                  <Controller
                    name='tutors-weekend'
                    control={control}
                    render={({ field }) => {
                      return (
                        <>
                          <Select
                            className='reactSelect mt-2'
                            name='tutors-weekend'
                            placeholder='Select Tutors'
                            options={selectOptions}
                            isMulti
                            {...field}
                          />
                        </>
                      )
                    }}
                  />
                </div> */}
              </div>
            </div>
            {/* file chooser */}
            <section>
              <div className='d-flex gap-20 '>
                <label
                  htmlFor='title'
                  className={`col-form-label fs-2xl ${style.labels}`}
                >
                  Resources
                </label>
                <div
                  className={
                    (style.inputs,
                    `d-flex align-items-center w-100 border border-1 p-5`)
                  }
                >
                  <input type='file' multiple {...register('files')} />
                  {/* <section className='w-100'>
                    <div {...getRootProps({ className: 'dropzone' })}>
                      <input {...getInputProps()} />
                      <p>Drag drop some files here, or click to select files</p>
                    </div>
                    <aside>
                      <h4>Files</h4>
                      <ul>{files}</ul>
                    </aside>
                  </section> */}
                </div>
              </div>
            </section>
            {/* CTA */}
            <div className='d-flex gap-10 justify-content-end my-8'>
              <button type='submit' className='btn btn-primary w-25'>
                Save Change
              </button>
              <button className='btn btn-outline-danger w-25'>Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <div className={style.notification}>
        <div className='d-flex justify-content-end'>
          <AvatarDropdown />
        </div>
      </div>
    </section>
  )
}

export default CreateCourse

{
  /* <Multiselect
                            style={{
                              chips: {
                                gap: `1rem`,
                                background: `#0266F41A`,
                                padding: `0.7rem 1rem`,
                                color: `#0266F4`,
                                border: `1px solid #0266F4`,
                                borderRadius: 5,
                              },
                              inputField: {
                                marginInline: `1rem`,
                              },
                              multiselectContainer: {
                                borderRadius: 5,
                              },
                            }}
                            showArrow
                            name='tutors'
                            placeholder='select tutor'
                            options={options}
                            displayValue={`name`}
                            customCloseIcon={
                              <Icon
                                width={`1.3rem`}
                                icon={`mdi:close-circle-outline`}
                              />
                            }
                          /> */
}
