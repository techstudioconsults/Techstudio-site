import React, { useState } from 'react'
import Calendar from 'react-calendar'

import './calendar.css'
// import 'react-calendar/dist/Calendar.css'

const CalendarApp = () => {
  const [value, onChange] = useState(new Date())

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default CalendarApp
