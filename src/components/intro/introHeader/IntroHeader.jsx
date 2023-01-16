import React from 'react'
import { Container } from '../../../layout'
import logo from '../../../assets/icons/logo.png'
import style from './introHeader.module.scss'
import { useContext } from 'react'
import AppContext from '../../../contexts/AppProvider'

const IntroHeader = () => {
  const { getCourseDetails } = useContext(AppContext)

  const handleClick = (e) => {
    let name = e.target.name
    getCourseDetails(name)
  }

  return (
    <div className={style.introHeader}>
      <Container>
        <section className={style.introHeaderWapper}>
          <div className={style.imgContainer}>
            <img src={logo} alt='logo' />
          </div>
          <div className={style.text}>
            <h2 className={style.title}>Our Learning Tracks</h2>
            <p className={style.subTitle}>
              Select any of our courses to get started on your tech journey
            </p>
          </div>
          <div className={style.btnGroup}>
            <button onClick={handleClick} name={0} className={style.courseBtn}>
              UI/UX Design
            </button>
            <button onClick={handleClick} name={1} className={style.courseBtn}>
              Data Science
            </button>
            <button onClick={handleClick} name={2} className={style.courseBtn}>
              Mobile Development
            </button>
            <button onClick={handleClick} name={3} className={style.courseBtn}>
              Fullstack
            </button>
            <button onClick={handleClick} name={4} className={style.courseBtn}>
              Front End Development
            </button>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default IntroHeader
