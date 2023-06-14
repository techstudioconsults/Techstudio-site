/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import * as bootstrap from 'bootstrap/dist/js/bootstrap'

import { AvatarXL } from '../../avatar/Avatar'
import DeleteModal from '../../modals/DeleteModal'
import Portal from '../../POTAL/Portal'
// import style from './adminClassDisplay.module.scss'

const LessonCard = ({ singleLesson }) => {
  const dispatch = useDispatch()
  const [resources, setResources] = useState([])
  const convertDateToReadable = (date) => {
    let dateSet = new Date(date).toUTCString().split(' ')
    return `${dateSet[2]} ${dateSet[1]}, ${dateSet[3]}`
  }

  const showLessonDetails = () => {
    dispatch({ type: 'classes/setLessonDetails', payload: singleLesson })
    dispatch({ type: 'app/setClassDetailOpen', payload: false })
  }

  const handleDeleteModal = () => {
    try {
      let modal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(`${singleLesson?.id}`)
      )
      modal.show()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setResources([
      ...singleLesson.externalResources.document,
      ...singleLesson.externalResources.video,
      ...singleLesson.externalResources.audio,
    ])
  }, [
    singleLesson.externalResources.audio,
    singleLesson.externalResources.document,
    singleLesson.externalResources.video,
  ])

  return (
    <>
      <Portal wrapperId='react-portal-modal-container'>
        <DeleteModal
          content={{
            title: `${`Are you sure you want to delete this Lesson?`}`,
            desc: `${singleLesson?.topic} Lesson has successfully being deleted. Kindly click continue to exit this page.`,
            lessonID: singleLesson?.id,
            courseID: singleLesson.courseId,
            action: `delete-lesson`,
          }}
        />
      </Portal>
      <button
        onClick={showLessonDetails}
        className={`btn btn-lg h-100 d-flex justify-content-between gap-5 text-dark border p-0 p-5 rounded-0`}
      >
        <section className='w-100'>
          <section className='d-flex justify-content-between w-100'>
            <section className='d-flex align-items-center text-start gap-5'>
              <div>
                <AvatarXL />
              </div>
              <div>
                <h6 className='m-0 fw-bold text-blue'>{singleLesson.topic}</h6>
                <p className='fs-sm text-secondary'>
                  {singleLesson.classTitle}
                </p>
              </div>
            </section>
            <section>
              <p className='fs-sm text-danger fw-semibold'>
                {singleLesson.classType}
              </p>
            </section>
          </section>
          <section className='d-flex justify-content-between text-start fs-sm ms-18 mt-5 text-secondary'>
            <div className='d-flex align-items-center gap-2'>
              <span className='text-lightBlue'>
                <Icon icon={`la:chalkboard-teacher`} width={`1.4rem`} />
              </span>
              <span>{singleLesson.tutorName}</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='text-lightBlue'>
                <Icon
                  icon={`material-symbols:calendar-today`}
                  width={`1.1rem`}
                />
              </span>
              <span>{convertDateToReadable(singleLesson.date)}</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='text-lightBlue'>
                <Icon icon={`mdi:clock-time-five-outline`} width={`1.2rem`} />
              </span>
              <span>{singleLesson.time}</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
              <span className='text-lightBlue'>
                <Icon
                  icon={`material-symbols:create-new-folder-outline`}
                  width={`1.3rem`}
                />
              </span>
              <span>{resources[0]?.slice(0, 20)}...</span>
            </div>
          </section>
        </section>
        <section>
          <div
            className='dropdown'
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className='dropdown-toggle p-0'
              data-bs-toggle='dropdown'
              data-bs-offset='-270,10'
              aria-expanded='false'
            >
              <Icon width={`1.5rem`} icon={`ph:dots-three-vertical-bold`} />
            </div>
            <ul className={`dropdown-menu`}>
              <div className='d-flex align-items-center px-5'>
                <Link
                  to={`/admin/class/${singleLesson?.id}/lesson/edit`}
                  state={singleLesson}
                >
                  <Icon
                    width={`1.1rem`}
                    icon={`material-symbols:edit`}
                    className='me-3'
                  />
                  <span>Reschedule Lesson</span>
                </Link>
              </div>
              <hr className='my-2' />
              <div
                onClick={handleDeleteModal}
                className='d-flex align-items-center text-danger px-3'
              >
                <Icon
                  width={`1.1rem`}
                  icon={`material-symbols:delete-outline-rounded`}
                  className='me-3'
                />
                <span>Delete Lesson</span>
              </div>
            </ul>
          </div>
        </section>
      </button>
    </>
  )
}

export default LessonCard
