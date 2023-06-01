import React from 'react'
import { Container } from '../../../layout'
import logo from '../../../assets/icons/logo.png'
import style from './introHeader.module.scss'
import { useContext } from 'react'
import AppContext from '../../../contexts/AppProvider'
import { Link } from 'react-router-dom'

const IntroHeader = () => {
  const { index, getCourseDetails } = useContext(AppContext)

  const handleClick = (e) => {
    let name = e.target.name
    getCourseDetails(name)
  }

  return (
    <div className={style.introHeader}>
      <Container>
        <section className={style.introHeaderWapper}>
          {/* <Link to={`/`} className={style.imgContainer}>
            <img src={logo} alt='logo' />
          </Link> */}
          <div className={style.text}>
            <h2 className={style.title}>Our Learning Tracks</h2>
            <p className={style.subTitle}>
              Select any of our courses to get started on your tech journey
            </p>
          </div>
          <div
            className={`${style.btnGroup} d-flex flex-column flex-lg-row gap-3 gap-lg-5`}
          >
            <button
              onClick={handleClick}
              name={0}
              className={[
                style.courseBtn,
                index === 0 ? style.active : null,
              ].join(' ')}
            >
              UI/UX Design
            </button>
            <button
              onClick={handleClick}
              name={1}
              className={[
                style.courseBtn,
                index === 1 ? style.active : null,
              ].join(' ')}
            >
              Fullstack Development
            </button>
            <button
              onClick={handleClick}
              name={2}
              className={[
                style.courseBtn,
                index === 2 ? style.active : null,
              ].join(' ')}
            >
              Data Science
            </button>
            <button
              onClick={handleClick}
              name={3}
              className={[
                style.courseBtn,
                index === 3 ? style.active : null,
              ].join(' ')}
            >
              Frontend Development
            </button>
            {/* <button
              onClick={handleClick}
              name={4}
              className={[
                style.courseBtn,
                index === 4 ? style.active : null,
              ].join(' ')}
            >
              Mobile Development
            </button> */}
          </div>
        </section>
      </Container>
    </div>
  )
}

export default IntroHeader
