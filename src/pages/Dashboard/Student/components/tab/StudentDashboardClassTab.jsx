import React from 'react'

import { Button } from '../../../../../components'
import ResourceListDisplay from '../../../../../components/dashboard/resources/ResourceListDisplay'
import { DASHBOARD_CONTENT } from '../../../../../layout/Layout/dashboardLayout/content'

import style from './classTab.module.scss'

const StudentDashboardClassTab = () => {
  const { studentBoard } = DASHBOARD_CONTENT

  const fileDisplay = studentBoard.resources.PDF.slice(0, 4).map((file) => {
    return <ResourceListDisplay key={file.id} file={file} />
  })
  return (
    <section className={style.tab}>
      <ul className={['nav', style.tabList].join(' ')}>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link active', style.a].join(' ')}
            id='home-tab'
            data-bs-toggle='tab'
            href='#about-course'
          >
            About Course
          </a>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            id='about-tab'
            data-bs-toggle='tab'
            href='#discussions'
          >
            Discussions
          </a>
        </li>
        <li className={['nav-item', style.link].join(' ')}>
          <a
            className={['nav-link', style.a].join(' ')}
            id='about-tab'
            data-bs-toggle='tab'
            href='#resources'
          >
            Resources
          </a>
        </li>
      </ul>

      <div className='tab-content p-6' id='tabContent'>
        <div
          className='tab-pane fade show active'
          id='about-course'
          role='tabpanel'
          aria-labelledby='course-tab'
        >
          <div className={style.listWrapper}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            quasi numquam reprehenderit officia recusandae magnam, quam pariatur
            id at quae, doloremque tempora molestiae sequi. Optio unde
            necessitatibus earum, assumenda ad modi repellendus et fugit
            incidunt cum officiis in odio. Dolores impedit illum qui doloribus
            molestias ratione velit incidunt itaque quibusdam.
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='discussions'
          role='tabpanel'
          aria-labelledby='discussion-tab'
        >
          <div className={style.listWrapper}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            libero est, autem quaerat culpa non sequi fugiat esse id recusandae
            quidem harum error eveniet minima voluptas numquam nemo minus cumque
            soluta, dignissimos ducimus cum accusantium nisi. Molestias
            explicabo, maiores sapiente repellat quo enim accusamus labore
            maxime nesciunt numquam exercitationem odio?
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='resources'
          role='tabpanel'
          aria-labelledby='resource-tab'
        >
          <div className={[style.listWrapper].join(' ')}>
            <div className={style.col1}>
              <div className='mb-8'>
                <h5 className='fw-bold'>Project Description</h5>
                <p className='fs-sm'>Redesign your business card</p>
              </div>
              <div className='mb-8'>
                <h5 className='fw-bold'>Assignment</h5>
                <p className='fs-sm'>
                  Redesign your business card. Just like in the lessons, create
                  some content (just write it out—that’s how you start!) and
                  then create a structure based on what you want to emphasize.
                  Gradually add more structure and contrast to the design, and
                  see where it takes you. Experiment with literary typefaces,
                  slabs, and custom type. Make the letterforms your own, have
                  some fun, and enjoy the explosion of joy that graphic design
                  can bring to your work.
                </p>
              </div>
              <div className='mb-8'>
                <h5 className='fw-bold'>Deliverable</h5>
                <p className='fs-sm'>Deliverable</p>
              </div>
            </div>
            <div className={style.col2}>
              <h5 className='fw-bold'>Resource</h5>
              <div>{fileDisplay}</div>
              <div className='my-4'>
                <Button navBtn solidBtn linkText='Submit Assignment' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentDashboardClassTab
