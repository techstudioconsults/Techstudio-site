import { useState } from 'react'
import Button from '@components/global/Button'
import Gsap from '@hooks/Gsap'
// import heroImg from '../../../../../assets/images/heroImg.webp'
import { Container } from '@layout'
import PropTypes from 'prop-types'

import { genericAnimation } from '../../../../../gsap'

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
      // onMouseLeave={handleMouseLeave}
      // onMouseMove={handleMouseMove}
      className={`${style.hero}  pt-24 pt-lg-40`}
    >
      <Container paddingBlock={0}>
        <Gsap animationFuncion={() => genericAnimation(`hero`)}>
          <section className={style.heroWrapper}>
            <div className={style.heroText}>
              <h1 className={`${style.title} hero`}>{title}</h1>
              <p className={`${style.description} hero`}>{description}</p>

              <div className={`${style.btnGroup} hero`}>
                <Button
                  width={`11`}
                  solidBtn
                  linkHref='/our-courses'
                  // linkHref='/student/signup'
                  linkText='Explore Courses'
                />
                <Button width={`11`} solidBtn={false} linkHref='/login' linkText='Log in' />
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
                loading='lazy'
                data-sizes='auto'
                src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/home-hero-img.png`}
                className='lazyload'
              />
            </div>
          </section>
        </Gsap>
      </Container>
      {/* <Gsap animationFuncion={() => float(`float`)}>
        <img
          src='https://res.cloudinary.com/dkszgtapy/image/upload/v1688484230/techstudio-web-app/assets/images/Vector_t3xpcs.svg'
          alt=''
          className='float'
        />
      </Gsap> */}
    </header>
  )
}

Hero.propTypes = {
  content: PropTypes.object.isRequired,
}

export default Hero
