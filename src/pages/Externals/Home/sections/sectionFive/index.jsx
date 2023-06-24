import { useRef } from 'react'
import PropTypes from 'prop-types'

import Stepper from '../../../../../components/global/steppers/Stepper'
import { STEPPER_IMG_ANIMATION } from '../../../../../gsap'
import IntersectionObserver from '../../../../../hooks/IntersectionObserver'
import { Container } from '../../../../../layout'

import style from './sectionFive.module.scss'

// Note: Never import/require the *.min.js files from the npm package.

const SectionFive = ({ content }) => {
  const sectionFive = useRef()
  const { lists } = content
  return (
    <IntersectionObserver
      animationFuncion={() => STEPPER_IMG_ANIMATION(sectionFive)}
    >
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
                src='https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1687593362/techstudio-web-app/assets/images/iPad_Pro_Mockupxx_1_ppbs9g.webp'
                data-src='https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1687593362/techstudio-web-app/assets/images/iPad_Pro_Mockupxx_1_ppbs9g.webp'
                className={`lazyload img-fluid ${style.img1} img1`}
              />
              <img
                alt='logo'
                data-sizes='auto'
                src='https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1687608443/techstudio-web-app/assets/images/iPad_Pro_Mockup_1_1_qipool.webp'
                data-src='https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_500/v1687608443/techstudio-web-app/assets/images/iPad_Pro_Mockup_1_1_qipool.webp'
                className={`lazyload img-fluid ${style.img2} img2`}
              />
            </div>
          </section>
        </Container>
      </section>
    </IntersectionObserver>
  )
}

SectionFive.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SectionFive
