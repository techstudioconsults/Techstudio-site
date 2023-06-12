import React from 'react'
import PropTypes from 'prop-types'
import style from './sectionFive.module.scss'
import ShortStepper from '../../../../../components/global/steppers/ShortStepper'
import { Container } from '../../../../../layout'

// Note: Never import/require the *.min.js files from the npm package.

const SectionFive = ({ content }) => {
  const { lists } = content
  return (
    <section className={`${style.sectionFive}`}>
      <Container>
        <section className={`${style.sectionFive} my-4`}>
          <div className={style.stepperList}>
            <ShortStepper lists={lists} />
          </div>
          <div className={style.sectionFiveImg}>
            <img
              alt='logo'
              data-sizes='auto'
              src='https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_100/v1686218816/techstudio-web-app/assets/images/Property_1_Frame_1000002406_ohrkxt_mqmtup.webp'
              data-src='https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_600/v1686218816/techstudio-web-app/assets/images/Property_1_Frame_1000002406_ohrkxt_mqmtup.webp'
              className='lazyload img-fluid'
            />
            {/* <img
              loading='lazy'
              src={`https://res.cloudinary.com/dkszgtapy/image/upload/c_scale,w_1000/v1686218816/techstudio-web-app/assets/images/Property_1_Frame_1000002406_ohrkxt_mqmtup.webp`}
              alt='sectionFive-img'
              className='img-fluid'
            /> */}
          </div>
        </section>
      </Container>
    </section>
  )
}

SectionFive.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SectionFive
