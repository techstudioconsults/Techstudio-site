import React from 'react'
import PropTypes from 'prop-types'

import BannerII from '../../../../../components/global/banners/BannerII'
import Button from '../../../../../components/global/Button'
import { Container } from '../../../../../layout'

import style from './sectionSix.module.scss'

const SectionSix = ({ content }) => {
  const { header } = content
  return (
    <section className={style.sectionSix}>
      <Container>
        <BannerII>
          <div className='ms-3 ms-lg-40 text-white py-20 py-xl-0'>
            <span className='small-text'>{header.caption}</span>
            <h4 className='mt-3 fw-bold text-white'>{header.title}</h4>
            <p className={`${style.description}`}>{header.description}</p>
            <div className={style.btnContainer}>
              <Button linkHref='/contact' linkText='Get Help' solidBtn navBtn width={`10`} />
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
