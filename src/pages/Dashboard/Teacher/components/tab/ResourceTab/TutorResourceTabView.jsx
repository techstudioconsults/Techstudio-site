/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import {
  AddResource,
  AvatarDropdown,
  Portal,
  SearchComponent,
} from '../../../../../../components'
import { ResourcesTab } from '../../../../..'

import TutorResourceTabDisplay from './TutorResourceTabDisplay'

import 'react-loading-skeleton/dist/skeleton.css'
import style from './tutorTab.module.scss' //using courses view layout !important

const TutorResourceTabView = () => {
  return (
    <>
      <Portal wrapperId='react-portal-modal-container'>
        <AddResource />
      </Portal>
      <section className={style.resourceView}>
        <div className={style.dashboardDisplay}>
          <div className={style.header}>
            <h4 className={[style.title, `mb-0 fw-bold`].join(' ')}>
              Resources
            </h4>
            <div className='d-flex align-items-center gap-3'>
              {/* make this search input a stand alone component */}
              <div
                className={`input-group border rounded overflow-hidden ${style.searchInput}`}
              >
                <SearchComponent />
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <div className='mt-5 d-flex flex-column gap-5'>
              <TutorResourceTabDisplay />
            </div>
          </div>
        </div>
        <div className={`${style.notification}`}>
          <div className='d-flex justify-content-end'>
            <AvatarDropdown />
          </div>
        </div>
      </section>
    </>
  )
}

export default TutorResourceTabView
