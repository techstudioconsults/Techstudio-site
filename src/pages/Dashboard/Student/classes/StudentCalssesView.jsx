import React from 'react'
import { Avatar, ClassesTab } from '../../../../components'
import style from './studentClasses.module.scss'

const StudentCalssesView = () => {
  return (
    <section className={style.classView}>
      <div className={style.dashboardDisplay}>
        <div className={style.header}>
          <h4 className={[style.title, `mb-0`].join(' ')}>Classes</h4>
          <Avatar />
        </div>
        <ClassesTab />
      </div>
      <div className={style.notification}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat labore
        dignissimos voluptatibus magnam rem velit quae repudiandae sequi ullam
        quibusdam!
      </div>
    </section>
  )
}

export default StudentCalssesView
