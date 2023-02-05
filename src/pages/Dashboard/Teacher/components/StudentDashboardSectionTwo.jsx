import React from 'react'
import PropTypes from 'prop-types'
import { DashboardMiniCard } from '../../../../components'
import style from './studentdashboardSections.module.scss'

const StudentDashboardSectionTwo = ({ content }) => {
  const { cards } = content
  const cardDisplay = cards.map((card) => {
    return <DashboardMiniCard key={card.id} card={card} />
  })
  return (
    <div className={[style.cardGroup, `hide_scrollbar`].join(' ')}>
      {cardDisplay}
    </div>
  )
}

StudentDashboardSectionTwo.propTypes = {
  content: PropTypes.object.isRequired,
}

export default StudentDashboardSectionTwo
