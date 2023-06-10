import React from 'react'
import PropTypes from 'prop-types'

import style from './employersHero.module.scss'
import { Container } from '../../../../../layout'
import { EmployerForm } from '../../../../../components'

const EmployerHero = ({ content }) => {
  return (
    <header className={`${style.employerHero}`}>
      <Container paddingBlock={0}>
        <div className={style.heroWrapper}>
          <div className={style.heroText}>
            <h1 className={style.heroHeaderText}>{content.title}</h1>
            <p className={style.description}>{content.description}</p>
          </div>
          <div className={style.heroImgContainer}>
            <EmployerForm />
          </div>
        </div>
      </Container>
    </header>
  )
}

EmployerHero.propTypes = {
  content: PropTypes.object.isRequired,
}

export default EmployerHero
