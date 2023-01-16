import React from 'react'
import { useContext } from 'react'
import AppContext from '../../../contexts/AppProvider'
import { Container } from '../../../layout'
import { INTRO_CONTENT } from '../../../pages/Intro/content'
import IntroCard from '../../global/cards/introCard/IntroCard'
import style from './introBody.module.scss'

const IntroBody = () => {
  const { index } = useContext(AppContext)
  const { price } = INTRO_CONTENT

  return (
    <section className={style.introBody}>
      <Container>
        <section className={style.introBodyWrapper}>
          <IntroCard course={price[index]} />
        </section>
      </Container>
    </section>
  )
}

export default IntroBody
