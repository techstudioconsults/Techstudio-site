import React from 'react'
import style from './sectionTwo.module.scss'
const index = ({ content }) => {
  console.log(content)
  return (
    <div className='container pt-5'>
      {content.map((each, index) => {
        return (
          <div
            className={`accordion ${style.accordionContainer}`}
            id='accordionExample'
            key={index}
          >
            <div className={`accordion-item px-3 py-4 ${style.accordionItem}`}>
              <h2 className='accordion-header'>
                <button
                  className={`accordion-button ${style.accordionButton}`}
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target={`#${each.id}`}
                  //   aria-expanded='true'
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

export default index
