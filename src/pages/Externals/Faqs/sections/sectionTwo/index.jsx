import React from 'react'
import style from './sectionTwo.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const index = ({ content }) => {
  const [startIndex, setStartindex] = useState(0)

  const handleNextClick = () => {
    setStartindex(startIndex + 7)
  }
  const handlePreviousClick = () => {
    setStartindex(startIndex - 7)
  }

  const renderAccordions = () => {
    const endIndex = startIndex + 7
    const slicedData = content.slice(startIndex, endIndex)
    return (
      <div className='pb-5'>
        {slicedData.map((each, index) => {
          return (
            <div
              className={`accordion ${style.accordionContainer}`}
              id='accordionExample'
              key={index}
            >
              <div
                className={`accordion-item px-3 py-4 ${style.accordionItem}`}
              >
                <h2 className='accordion-header'>
                  <button
                    className={`accordion-button ${style.accordionButton}`}
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target={`#${each.id}`}
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    {each.question}
                  </button>
                </h2>
                <div
                  id={`${each.id}`}
                  className='accordion-collapse collapse'
                  data-bs-parent='#accordionExample'
                >
                  <div className={`accordion-body ${style.accordionBody}`}>
                    {each.answer}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <section className='container pt-5'>
      <div>{renderAccordions()}</div>
      <div
        className={`d-flex mx-auto gap-4 justify-content-center pb-5 mb-5 ${style.carouselNumber}`}
      >
        <button onClick={handlePreviousClick}>&lt;</button>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <button onClick={handleNextClick}>&gt;</button>
      </div>
      <div className={style.contactLink}>
        Can&apos;t find the answer you are looking for?
        <span>
          <a href='/contact'> Send us a message here</a>
        </span>
      </div>
    </section>
  )
}

export default index
