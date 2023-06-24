import { useState } from 'react'
import PropTypes from 'prop-types'

// import heroImg from '../../../../../assets/images/heroImg.webp'
import { Container } from '@/layout'

import Button from '../../../../../components/global/Button'

import style from './hero.module.scss'

const Hero = ({ content }) => {
  const { title, description } = content

  const [transform, setTransform] = useState({
    perspective: '1000px',
    translateX: 0,
    translateY: 0,
  })

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    // Calculate the distance between the mouse and the center of the screen
    const calcDistanceX = clientX > 0 ? -clientX : clientX
    const calcDistanceY = clientY > 0 ? -clientY : clientY

    const distanceX = (calcDistanceX / centerX) * 10
    const distanceY = (calcDistanceY / centerY) * 10
    // console.log({ x: distanceX, y: distanceY })

    // Update the transform values based on the mouse position
    setTransform({
      perspective: '1000px',
      translateX: distanceX,
      translateY: distanceY,
    })
  }

  const handleMouseLeave = () => {
    setTransform({
      perspective: '1000px',
      translateX: 0,
      translateY: 0,
    })
  }

  return (
    <header
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={style.hero}
    >
      <Container paddingBlock={0}>
        <section className={style.heroWrapper}>
          <div className={style.heroText}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.description}>{description}</p>

            <div className={style.btnGroup}>
              <Button
                width={`11`}
                solidBtn
                linkHref='/our-courses'
                // linkHref='/student/signup'
                linkText='Explore Courses'
              />
              <Button
                width={`11`}
                solidBtn={false}
                linkHref='/login'
                linkText='Log in'
              />
            </div>
          </div>
          <div
            style={{
              transform: `perspective(1000px) rotateX(${transform.translateX}deg) rotateY(${transform.translateY}deg) translateZ(0px)`,
              transition: `all .1s ease-out`,
            }}
            className={style.heroImg}
          >
            <img
              alt='logo'
              data-sizes='auto'
              src='https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686744735/techstudio-web-app/assets/images/hero_doqefw.webp'
              data-src='https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_2000/v1686744735/techstudio-web-app/assets/images/hero_doqefw.webp'
              className='lazyload'
            />
          </div>
        </section>
      </Container>
    </header>
  )
}

Hero.propTypes = {
  content: PropTypes.object.isRequired,
}

export default Hero
