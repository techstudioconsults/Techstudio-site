/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import style from './sectionone.module.scss'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Icon } from '@iconify/react'

const index = () => {
  const dispatch = useDispatch()

  const { register, reset, handleSubmit } = useForm({
    criteriaMode: 'all',
  })

  const onSubmit = async (data) => {
    try {
      const res = await axios.get(
        `https://api.techstudio.academy/api/v1/external/faq?search=${data.search}`
      )
      dispatch({ type: `app/setFAQ`, payload: res.data.data })
      console.log(res.data.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <main className={style.headerContainer}>
      <h2 className={style.subtitle}>Frequently Asked Questions </h2>
      <h2 className={style.subtitle}>(FAQS)</h2>
      <p className={style.subtitleTwo}>
        You have questions? We are here to help
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.searchContainer}>
          <Icon icon='iconamoon:search-thin' className={style.searchIcon} />
          <input
            type='text'
            placeholder='Search for a question...'
            className={`${style.searchBar} py-7`}
            {...register('search')}
          />
        </div>
      </form>
    </main>
  )
}
export default index
