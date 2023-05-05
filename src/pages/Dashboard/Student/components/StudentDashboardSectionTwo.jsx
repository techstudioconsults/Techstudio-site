import React from 'react'
import PropTypes from 'prop-types'
import { DashboardMiniCard } from '../../../../components'
import style from './studentdashboardSections.module.scss'

const StudentDashboardSectionTwo = ({ content, cardsAPI }) => {
  const { cards } = content
  // const cardDisplay = cards.map((card) => {
  //   return <DashboardMiniCard key={card.id} card={card} />
  // })
  return (
    <div className={[style.cardGroup, `hide_scrollbar`].join(' ')}>
      {/* {cardDisplay} */}
      <DashboardMiniCard
        card={cards[0]}
        total={cardsAPI.totalStudents}
        modalNumber={`student-detail-modal`}
      />
      <DashboardMiniCard
        card={cards[1]}
        total={cardsAPI.totalTutors}
        modalNumber={`tutor-detail-modal`}
      />
      <DashboardMiniCard
        card={cards[2]}
        total={cardsAPI.totalResources}
        modalNumber={`resources-detail-modal`}
      />
      <DashboardMiniCard
        card={cards[3]}
        total={cardsAPI.totalOutstanding}
        modalNumber={`outstanding-detail-modal`}
      />
    </div>
  )
}

StudentDashboardSectionTwo.propTypes = {
  content: PropTypes.object.isRequired,
  cardsAPI: PropTypes.object.isRequired,
}

export default StudentDashboardSectionTwo
