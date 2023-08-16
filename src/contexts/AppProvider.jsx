import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [courseID, setCourseID] = useState(null)
  const [route, setRoute] = useState(null)

  const getCourseID = (id) => {
    setCourseID(id)
  }
  const getdashboardNavRoute = (route) => {
    setRoute(route)
  }
  return (
    <AppContext.Provider
      value={{ courseID, getCourseID, route, getdashboardNavRoute }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  index: PropTypes.number,
  route: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default AppContext
