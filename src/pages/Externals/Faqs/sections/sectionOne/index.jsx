/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import style from './sectionone.module.scss'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Icon } from '@iconify/react'

const index = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit } = useForm({
    criteriaMode: 'all',
  })

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const res = await axios.get(
        `https://api.techstudio.academy/api/v1/external/faq?search=${data.search}`
      )
      dispatch({ type: `app/setFAQ`, payload: res.data.data })
      console.log(res.data.data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  // if (loading === true) {
  //   return (
  //     <div className='d-flex justify-content-center my-60'>
  //       <div className='spinner-border text-primary m-5' role='status'>
  //         <span className='visually-hidden  '>Loading...</span>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <main className={style.headerContainer}>
      <h2 className={style.subtitle}>Frequently Asked Questions </h2>
      <h2 className={style.subtitle}>(FAQS)</h2>
      <p className={style.subtitleTwo}>
        You have questions? We are here to help
      </p>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`${style.searchContainer} d-flex align-items-center`}>
          <div>
            <Icon icon='iconamoon:search-thin' />
          </div>
          <input
            type='text'
            placeholder='Search for a question...'
            className={`${style.searchBar} py-7`}
            {...register('search')}
          />
        </div>
      </form> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${style.searchContainer} input-group mb-3 bg-white border border-2 border-white rounded rounded-md overflow-hidden`}
      >
        <span className='input-group-text fs-xl bg-white' id='basic-addon1'>
          <Icon icon='iconamoon:search-thin' />
        </span>
        <input
          type='text'
          className='form-control text-dark border border-0'
          placeholder='Search'
          aria-label='Username'
          aria-describedby='basic-addon1'
          {...register('search')}
        />
      </form>
    </main>
  )
}
export default index
