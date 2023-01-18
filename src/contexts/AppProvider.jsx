import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [index, setIndex] = useState(0)

  const getCourseDetails = (name) => {
    setIndex(parseInt(name))
  }
  return (
    <AppContext.Provider value={{ index, getCourseDetails }}>
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  index: PropTypes.number,
  children: PropTypes.node.isRequired,
}

export default AppContext
