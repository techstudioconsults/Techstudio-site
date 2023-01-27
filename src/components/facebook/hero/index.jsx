import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../global/Button'
import useAppProvider from '../../../hooks/useAppProvider'

import style from './hero.module.scss'

const FacebookHero = ({ content }) => {
  const { handleRegisterModal } = useAppProvider()
  return (
    <header className={style.hero}>
      <section className={`${style.heroWrapper} container`}>
        <div className={style.heroText}>
          <h1>{content.title}</h1>
          <p>{content.subTitle}</p>
          <div className={style.btn}>
            <Button
              linkText='Enroll Now'
              linkHref='/'
              solidBtn
              width={`7.5`}
              paddingInline={0}
              onClick={handleRegisterModal}
            />
          </div>
        </div>
        <div className={style.heroImg}>
          <img src={content.img} alt='hero-img' />
        </div>
      </section>
    </header>
  )
}
FacebookHero.propTypes = {
  content: PropTypes.object.isRequired,
}

export default FacebookHero
