import React from 'react'
import PropTypes from 'prop-types'
import style from './sectionFour.module.scss'
import sectionFourImg from '../../../assets/images/home-img5.webp'
import { Container } from '../../../layout'
import Button from '../../global/Button'

const index = ({ content }) => {
  const { header } = content
  return (
    <section className={style.sectionFour}>
      <Container>
        <div className={style.sectionFourWrapper}>
          <div className={style.sectionFourImg}>
            <img
              src={sectionFourImg}
              alt='section-four'
              className='img-fluid'
            />
          </div>
          <div className={style.sectionFourTextGroup}>
            <div className={style.sectionFourText}>
              <h5 className={style.caption}>{header.caption}</h5>
              <h2 className={style.title}>{header.title}</h2>
              <p className={style.subTitle}>{header.subTitle}</p>
            </div>
            <div className={style.btnContainer}>
              <Button
                linkHref='/about-us'
                linkText='KNOW US MORE'
                solidBtn
                navBtn
                width={`11`}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

index.propTypes = {
  content: PropTypes.object.isRequired,
}

export default index
