/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Icon } from '@iconify/react'
import axios from 'axios'

import { genericAnimation, SCALE_ANIMATION } from '../../../../../gsap'
import Gsap from '../../../../../hooks/Gsap'

import style from './sectionone.module.scss'

const baseUrl = import.meta.env.VITE_BASE_URL
const index = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit } = useForm({
    criteriaMode: 'all',
  })

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const res = await axios.get(`${baseUrl}/external/faq?search=${data.search}`)
      dispatch({ type: `app/setFAQ`, payload: res.data.data })
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
    <Gsap animationFuncion={() => genericAnimation(`faqH`)}>
      <main className={`${style.headerContainer}`}>
        <h1 className={`${style.subtitle} faqH`}>Frequently Asked Questions </h1>
        <h1 className={`${style.subtitle} faqH`}>(FAQS)</h1>
        <p className={`${style.subtitleTwo} medium-text`}>You have questions? We are here to help</p>
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
        <Gsap animationFuncion={() => SCALE_ANIMATION(`search`)}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${style.searchContainer} input-group mb-3 bg-white border border-2 border-white rounded rounded-md overflow-hidden search`}
          >
            <span className='input-group-text bg-white' id='basic-addon1'>
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
        </Gsap>
      </main>
    </Gsap>
  )
}
export default index
