import React from 'react'
import PropTypes from 'prop-types'

import { EmployerForm } from '../../../../../components'
import { Container } from '../../../../../layout'

import style from './employersSectionFour.module.scss'

const index = ({ content }) => {
  const { header } = content
  return (
    <section className={style.employersSectionFour}>
      <Container>
        <div className={style.sectionFourWrapper}>
          <div className={style.text}>
            <h2 className={style.title}>{header.title}</h2>
            <p className={style.desc}>{header.description}</p>
          </div>
          <div className={style.sectionFourForm}>
            <EmployerForm showTopInputs />
          </div>
        </div>
      </Container>
    </section>
  )
}

index.propTypes = {
  content: PropTypes.object.isRequired,
}

export default index
