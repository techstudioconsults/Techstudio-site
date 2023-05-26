import React from 'react'
import style from './sectionTwo.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const index = ({ content }) => {
  // const[activeIndex, setActiveIndex] = useState(0)
  return (
    <section className='container pt-5'>
      <div className='pb-5'>
        {content.map((each, index) => {
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
      <div
        className={`d-flex mx-auto gap-4 justify-content-center pb-5 mb-5 ${style.carouselNumber}`}
      >
        <p>&lt;</p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>&gt;</p>
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
