import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../../../layout'
import EmployerForm from '../../global/forms/employerForm/EmployerForm'

import style from './employersHero.module.scss'

const index = ({ content }) => {
  return (
    <header className={style.employerHero}>
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

index.propTypes = {
  content: PropTypes.object.isRequired,
}

export default index
