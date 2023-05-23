import React from 'react'
import PropTypes from 'prop-types'
import style from './sectioniThree.module.scss'
import { Container } from '../../../../../layout'
import { Profile, TestimonialBanner } from '../../../../../components'

const SectionThree = ({ content }) => {
  const { body } = content
  return (
    <section className={style.sectionThree}>
      <div className={style.banner}>
        <Container>
          <TestimonialBanner>
            <div className='text-white text-center d-flex flex-column align-items-lg-center gap-10 py-10 p-lg-20'>
              <p
                className={[
                  'text-start text-lg-center lh-lg',
                  style.message,
                ].join(' ')}
              >
                {body.message}
              </p>
              <Profile content={body.profile} />
            </div>
          </TestimonialBanner>
        </Container>
      </div>
    </section>
  )
}

SectionThree.propTypes = {
  content: PropTypes.object.isRequired,
}

export default SectionThree
