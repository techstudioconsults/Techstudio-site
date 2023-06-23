import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '../../../../../components'
import CourseBanner from '../../../../../components/global/banners/CourseBanner'
import UseAnimate from '../../../../../hooks/useAnimate'
import { Container } from '../../../../../layout'

import style from './courseHero.module.scss'

const index = ({ content, duration }) => {
  const { title, subTitle, img } = content
  return (
    <>
      <header className={style.hero}>
        <Container paddingBlock={0}>
          <section className={style.heroWrapper}>
            <div className={style.heroText}>
              <UseAnimate>
                <h1 className={style.title}>{title}</h1>
                <p className={style.description}>{subTitle}</p>
              </UseAnimate>
              <div className='mt-10 d-flex justify-content-center justify-content-lg-start mb-10 mb-lg-0'>
                <Button
                  linkHref='/student/register'
                  linkText='Enroll Now'
                  solidBtn
                  navBtn
                  width={`10`}
                />
              </div>
            </div>
            <div className={style.heroImg}>
              <img src={img} alt='hero-img' />
            </div>
          </section>
        </Container>
      </header>
    </>
  )
}

index.propTypes = {
  content: PropTypes.object.isRequired,
}

export default index
