import React, { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'
import style from './jobform.module.scss'

const JobRequirementForm = () => {
  const [jobDescription, setJobDescription] = useState('')
  const [responsibility, setResponsibility] = useState('')
  const [requirement, setRequirement] = useState('')

  return (
    <form className={style.jobForm}>
      <section className={style.row}>
        <div className='mb-3'>
          <label htmlFor='job-title' className='form-label'>
            Job title
          </label>
          <input
            type='text'
            className='form-control form-control-lg'
            id='job-title'
            placeholder='Enter job title for this job post'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='job-location' className='form-label'>
            Job Location
          </label>
          <input
            type='text'
            className='form-control form-control-lg'
            id='job-location'
            placeholder='Enter job location for this job post'
          />
        </div>
      </section>
      {/* row 2 */}
      <section className={style.row}>
        <div className='mb-3'>
          <label htmlFor='job-type' className='form-label'>
            What position type are you offering?
          </label>
          <select
            id='job-type'
            className='form-select'
            aria-label='.form-select-lg example'
          >
            <option selected>Select Job Type</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>
        <div className='mb-3'>
          <label htmlFor='job-type' className='form-label'>
            What level of experience do you want?
          </label>
          <select
            id='job-type'
            className='form-select'
            aria-label='.form-select-lg example'
          >
            <option selected>
              Choose the minimum experience level required
            </option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>
      </section>
      {/* row 3 */}
      <section className={style.rowSpan}>
        <div className={['mb-3', style.quillWrapper].join(' ')}>
          <label htmlFor='job-type' className='form-label'>
            Job Description
          </label>
          <ReactQuill
            placeholder='Enter the title of position you want to fill'
            className={style.quill}
            theme='snow'
            value={jobDescription}
            onChange={setJobDescription}
          />
        </div>
        <div className={['mb-3', style.quillWrapper].join(' ')}>
          <label htmlFor='job-type' className='form-label'>
            Requirement
          </label>
          <ReactQuill
            placeholder='Describe your minimum requirement for this job'
            className={style.quill}
            theme='snow'
            value={requirement}
            onChange={setRequirement}
          />
        </div>
      </section>
      {/* row 4 */}
      <section className={style.row}>
        <div className={['mb-3'].join(' ')}>
          <label htmlFor='job-skill' className='form-label'>
            What skills or languages are you looking to hire?
          </label>
          <div
            className={[
              style.skills,
              `d-flex align-items-center border border-1 rounded rounded-3`,
            ].join(' ')}
          >
            <input
              type='text'
              className='form-control form-control-lg border-0 rounded-0'
              id='job-title'
              placeholder='Add new skill'
            />
            <div className='p-2'>
              <MdAdd size={`2rem`} className='' />
            </div>
            <div>{/* display */}</div>
          </div>
        </div>
        <div className={['mb-3', style.quillWrapper].join(' ')}>
          <label htmlFor='job-tool' className='form-label'>
            What tools would be used?
          </label>
          <div
            className={[
              style.skills,
              `d-flex align-items-center border border-1 rounded rounded-3`,
            ].join(' ')}
          >
            <input
              type='text'
              className='form-control form-control-lg border-0 rounded-0'
              id='job-title'
              placeholder='Add new tool'
            />
            <div className='p-2'>
              <MdAdd size={`2rem`} className='' />
            </div>
            <div>{/* display */}</div>
          </div>
        </div>
      </section>
      {/* row 5 */}
      <section className={style.rowSpan}>
        <div className={['mb-3', style.quillWrapper].join(' ')}>
          <label htmlFor='job-responsibilities' className='form-label'>
            Responsibilities
          </label>
          <ReactQuill
            id='job-responsibilities'
            placeholder='Describe your minimum requirement for this job'
            className={style.quill}
            theme='snow'
            value={responsibility}
            onChange={setResponsibility}
          />
        </div>
      </section>
      {/* last row */}
      <section className={style.row}>
        <div className='mb-3'>
          <label htmlFor='job-type' className='form-label'>
            What is the pay range?
          </label>
          <select
            id='job-type'
            className='form-select'
            aria-label='.form-select-lg example'
          >
            <option selected>Hiring for a week?</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>
        <div className='mb-3'>
          <label htmlFor='job-type' className='form-label'>
            For how will you be taking applicants?
          </label>
          <select
            id='job-type'
            className='form-select'
            aria-label='.form-select-lg example'
          >
            <option selected>Set application deadline</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        </div>
      </section>
    </form>
  )
}

export default JobRequirementForm
