import React from 'react'
import PropTypes from 'prop-types'

import { Container } from '../../../layout'
import BannerII from '../../global/banners/BannerII'
import Button from '../../global/Button'
import style from './facebooksectionfour.module.scss'

const FacebookSectionFour = ({ content }) => {
  return (
    <section className={style.sectionSix}>
      <Container>
        <BannerII className={style.BannerII}>
          <div className='ms-3 ms-lg-40 text-white py-20 py-xl-0'>
            <span>{content.header.caption}</span>
            <h3 className='mt-7 fw-bold'>{content.header.title}</h3>
            <div>
              {content.schedule.map((item, index) => (
                <div key={index} className={style.content}>
                  <div className={style.contentTitle}>
                    <div>
                      <img src={item.icon} alt='icon' />
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>

            <div className={style.btnContainer}>
              <Button
                linkHref='/'
                linkText='Appply Now'
                solidBtn
                navBtn
                width={`12`}
              />
            </div>
          </div>
        </BannerII>
      </Container>
    </section>
  )
}

FacebookSectionFour.propTypes = {
  content: PropTypes.object.isRequired,
}

export default FacebookSectionFour
