import { useRef } from 'react'
import PropTypes from 'prop-types'

import Stepper from '../../../../../components/global/steppers/Stepper'
import { STEPPER_IMG_ANIMATION } from '../../../../../gsap'
import Gsap from '../../../../../hooks/Gsap'
import { Container } from '../../../../../layout'

import style from './sectionFive.module.scss'

// Note: Never import/require the *.min.js files from the npm package.

const SectionFive = ({ content }) => {
  const sectionFive = useRef()
  const { lists } = content
  return (
    <Gsap animationFuncion={STEPPER_IMG_ANIMATION}>
      <section className={`${style.sectionFive}`}>
        <Container>
          <section className={`${style.sectionFive} my-4`}>
            <div className={style.stepperList}>
              <Stepper lists={lists} />
            </div>
            <div ref={sectionFive} className={style.sectionFiveImg}>
              <img
                alt='logo'
                data-sizes='auto'
                src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/ipad-1.png`}
                className={`lazyload img-fluid ${style.img1} img1`}
              />
              <img
                alt='logo'
                data-sizes='auto'
                src={`https://techstudio.nyc3.cdn.digitaloceanspaces.com/External-page-assets/Images/ipad-2.png`}
                className={`lazyload img-fluid ${style.img2} img2`}
              />
            </div>
          </section>
        </Container>
      </section>
    </Gsap>
  )
}

SectionFive.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SectionFive
