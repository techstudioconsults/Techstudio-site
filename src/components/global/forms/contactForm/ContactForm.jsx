import React from 'react'
import style from './contactForm.module.scss'

const ContactForm = () => {
  return (
    <form className={[style.form, `cc-shadow`].join(' ')}>
      <div>
        <label htmlFor='fullName' className='form-label fw-semibold'>
          Full Name
        </label>
        <input
          type='text'
          id='fullName'
          className='form-control'
          aria-describedby='passwordHelpBlock'
          placeholder='Full name'
        />
      </div>
      <div>
        <label htmlFor='email' className='form-label fw-semibold'>
          Email Address
        </label>
        <input
          type='email'
          id='email'
          className='form-control'
          aria-describedby='passwordHelpBlock'
          placeholder='example@example.com'
        />
      </div>
      <div>
        <label htmlFor='subject' className='form-label fw-semibold'>
          Subject
        </label>
        <select
          id='subject'
          className={[`form-select`, style.select].join(' ')}
        >
          <option>Training programs</option>
        </select>
      </div>
      <div className={style.textArea}>
        <label
          htmlFor='exampleFormControlTextarea1'
          className='form-label fw-semibold'
        >
          Message or Questions
        </label>
        <textarea
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='3'
          placeholder='Type your message, questions or inquiries here'
        ></textarea>
      </div>
      <div className={style.btnContainer}>
        <button type='submit'>Send Message</button>
      </div>
    </form>
  )
}

export default ContactForm
