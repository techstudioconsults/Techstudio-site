import React from 'react'
import PropTypes from 'prop-types'
import BannerII from '../../global/banners/BannerII'
import Button from '../../global/Button'
import style from './sectionSix.module.scss'
import { Container } from '../../../layout'

const index = ({ content }) => {
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

index.propTypes = {
  content: PropTypes.object.isRequired,
}

export default index
