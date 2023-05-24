import React from 'react'
import PropTypes from 'prop-types'
import BannerII from '../../../../../components/global/banners/BannerII'
import Button from '../../../../../components/global/Button'
import style from './sectionSix.module.scss'
import { Container } from '../../../../../layout'

const SectionSix = ({ content }) => {
  const { header } = content
  return (
    <section className={style.sectionSix}>
      <Container>
        <BannerII>
          <div className='ms-3 ms-lg-40 text-white py-20 py-xl-0'>
            <span>{header.caption}</span>
            <h3 className='mt-7 fw-bold text-white'>{header.title}</h3>
            <div className={style.btnContainer}>
              <Button
                linkHref='/register'
                linkText='Register'
                solidBtn
                navBtn
                width={`14`}
              />
            </div>
          </div>
        </BannerII>
      </Container>
    </section>
  )
}

SectionSix.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SectionSix
