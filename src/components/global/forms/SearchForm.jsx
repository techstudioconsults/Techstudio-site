import React from 'react'

const SearchForm = () => {
  return (
    <form>
      <div className='input-group mb-3 bg-white rounded-3 p-0'>
        <input
          type='email'
          className='form-control py-2 fs-xs border-0'
          placeholder='Email Address'
          aria-label='Email Address'
          aria-describedby='button-addon2'
        />
        <button className='btn btn-primary fs-xs py-3 px-8 px-lg-14' type='button' id='button-addon2'>
          Subscribe
        </button>
      </div>
    </form>
  )
}

export default SearchForm
