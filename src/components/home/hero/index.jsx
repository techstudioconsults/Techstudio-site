import React from 'react'
import style from './hero.module.scss'
import heroImg from '../../../assets/images/heroImg.webp'
import { Container } from '../../../layout'
import Button from '../../global/Button'
import PropTypes from 'prop-types'

const index = ({ content }) => {
  const { title, description } = content
  return (
    <header className={style.hero}>
      <Container paddingBlock={0}>
        <section className={style.heroWrapper}>
          <div className={style.heroText}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.description}>{description}</p>
            <div className={style.btnGroup}>
              <Button
                width={`11`}
                solidBtn
                linkHref='/tracks'
                // linkHref='/student/signup'
                linkText='Take a course'
              />
              <Button
                width={`11`}
                solidBtn={false}
                linkHref='/login'
                linkText='Log in'
              />
            </div>
          </div>
          <div className={style.heroImg}>
            <img src={heroImg} alt='hero-img' />
          </div>
        </section>
      </Container>
    </header>
  )
}

index.propTypes = {
  content: PropTypes.object.isRequired,
}

export default index
