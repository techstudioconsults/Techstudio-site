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
            <h4 className='mt-5 fw-bold text-white fs-3xl'>{header.title}</h4>
            <p className='w-50'>{header.description}</p>
            <div className={style.btnContainer}>
              <Button
                linkHref='/register'
                linkText='Get Help'
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
