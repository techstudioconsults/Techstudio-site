import React from 'react'
import PropTypes from 'prop-types'
import { DashboardMiniCard, Portal } from '../../../../components'
import style from './studentdashboardSections.module.scss'
import useCurrency from '../../../../hooks/useCurrency'
import CardDetailsModal from '../../Admin/components/cardDetailsModal/CardDetailsModal'
import { Link } from 'react-router-dom'
import TutorsCardDisplay from '../../../../components/dashboard/dashboardMiniCard/TutorsCardDisplay'
import StudentCardDisplay from '../../../../components/dashboard/dashboardMiniCard/StudentCardDisplay'
import OutstandingCardDisplay from '../../../../components/dashboard/dashboardMiniCard/OutstandingCardDisplay'

const StudentDashboardSectionTwo = ({ content, cardsAPI }) => {
  const { cards } = content
  const currency = useCurrency()
  // const cardDisplay = cards.map((card) => {
  //   return <DashboardMiniCard key={card.id} card={card} />
  // })
  return (
    <div className={[style.cardGroup, `hide_scrollbar`].join(' ')}>
      {/* {cardDisplay} */}
      <>
        <DashboardMiniCard
          card={cards[0]}
          total={cardsAPI.totalStudents}
          // total={cardsAPI.totalStudents}
          modalNumber={`student-detail-modal`}
          route={`/admin/users/all`}
          location={`student`}
        />
        <Portal wrapperId='react-portal-modal-container'>
          <CardDetailsModal
            content={{
              modalID: `student-detail-modal`,
            }}
          >
            <StudentCardDisplay />
          </CardDetailsModal>
        </Portal>
      </>
      <>
        <DashboardMiniCard
          card={cards[1]}
          total={cardsAPI.totalTutors}
          // total={cardsAPI.totalTutors}
          modalNumber={`tutor-detail-modal`}
          route={`/admin/users/all`}
          location={`tutor`}
        />
        <Portal wrapperId='react-portal-modal-container'>
          <CardDetailsModal
            content={{
              modalID: `tutor-detail-modal`,
            }}
          >
            <TutorsCardDisplay />
          </CardDetailsModal>
        </Portal>
      </>
      <>
        <Link className='text-dark' to={`/admin/resources/all`}>
          <DashboardMiniCard
            card={cards[2]}
            total={cardsAPI.totalResources}
            // total={cardsAPI.totalResources}
            modalNumber={`resources-detail-modal`}
            route={`/admin/resources/all`}
            location={`resource`}
          />
        </Link>
      </>
      <>
        <DashboardMiniCard
          card={cards[3]}
          total={currency(cardsAPI.totalOutstanding)}
          modalNumber={`outstanding-detail-modal`}
          route={`/admin/payment`}
          location={`payment`}
        />
        <Portal wrapperId='react-portal-modal-container'>
          <CardDetailsModal
            content={{
              modalID: `outstanding-detail-modal`,
            }}
          >
            <OutstandingCardDisplay />
          </CardDetailsModal>
        </Portal>
      </>
    </div>
  )
}

StudentDashboardSectionTwo.propTypes = {
  content: PropTypes.object.isRequired,
  cardsAPI: PropTypes.object.isRequired,
}

export default StudentDashboardSectionTwo
