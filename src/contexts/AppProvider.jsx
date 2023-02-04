import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [index, setIndex] = useState(0)
  const [route, setRoute] = useState(null)

  const getCourseDetails = (name) => {
    setIndex(parseInt(name))
    console.log(name)
  }
  const getdashboardNavRoute = (route) => {
    setRoute(route)
  }
  return (
    <AppContext.Provider
      value={{ index, getCourseDetails, route, getdashboardNavRoute }}
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
