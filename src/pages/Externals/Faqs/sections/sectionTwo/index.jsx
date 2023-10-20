/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { selectFAQ } from '../../../../../app/api/appSlice'

// import { genericAnimation } from '../../../../../gsap'
// import Gsap from '../../../../../hooks/Gsap'
import './sectionTwo.scss'
const baseUrl = import.meta.env.VITE_BASE_URL

const Accordion = () => {
  const dispatch = useDispatch()
  const faq = useSelector(selectFAQ)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const getFAQ = useCallback(async () => {
    setLoading(true)
    const res = await axios.get(`${baseUrl}/external/faq?page=${currentPage}`)
    dispatch({ type: `app/setFAQ`, payload: res.data.data })
    setLoading(false)
  }, [currentPage, dispatch])

  const style = useMemo(() => {
    const baseStyle = {
      fontSize: `20px`,
    }

    if (window.innerWidth <= 767) {
      baseStyle.fontSize = `14px`
    }

    return baseStyle
  }, [])

  useEffect(() => {
    getFAQ()
  }, [getFAQ])

  if (loading === true) {
    return (
      <div className='d-flex justify-content-center my-60'>
        <div className='spinner-border text-primary m-5' role='status'>
          <span className='visually-hidden  '>Loading...</span>
        </div>
      </div>
    )
  }
  const displayFAQ = faq?.data?.map((faq) => {
    return (
      // <Gsap key={faq?.id} animationFuncion={() => genericAnimation(`faq`)}>
      <div
        key={faq?.id}
        className='accordion-item border border-0 py-1  py-lg-5 faq'
      >
        <h2 className='accordion-header ' id='headingTwo'>
          <button
            style={style}
            className='accordion-button collapsed text-dark'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target={`#a-${faq.id.toString()}-accordion`}
            aria-expanded='false'
            aria-controls={`a-${faq.id.toString()}-accordion`}
          >
            {faq?.question}
          </button>
        </h2>
        <div
          id={`a-${faq.id.toString()}-accordion`}
          className='accordion-collapse collapse'
          aria-labelledby='headingTwo'
          data-bs-parent='#accordionExample'
        >
          <div style={style} className='accordion-body text-dark'>
            {faq?.answer}
          </div>
        </div>
      </div>
      // </Gsap>
    )
  })

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const pagination = (
    <div className='pagination d-flex justify-content-center my-20 my-sm-10 gap-3'>
      <button
        className='bg-transparent small-text'
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {'<'}
      </button>
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          className={
            currentPage === page
              ? 'active bg-blue text-white px-4 rounded rounded-2 small-text'
              : 'bg-transparent small-text'
          }
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className='bg-transparent small-text'
        disabled={currentPage === 4}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {'>'}
      </button>
    </div>
  )

  return (
    <section className='container pt-10 padding-up'>
      <div className='accordion mt-5 mt-lg-20' id='accordionExample'>
        {displayFAQ}
      </div>
      {pagination}
      <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center gap-1'>
        <p className='d-inline fw-semibold'>
          Can’t find the answer you are looking for?
        </p>{' '}
        <Link className='fw-semibold' to={`/contact`}>
          Send us a message here
        </Link>
      </div>
    </section>
  )
}

export default Accordion
