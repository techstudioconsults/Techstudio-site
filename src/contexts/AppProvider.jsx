import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import useBodyScrollLock from '../hooks/useBodyScrollLock'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [index, setIndex] = useState(0)
  const [registerModal, setRegisterModal] = useState(false)
  const { toggle } = useBodyScrollLock()

  const handleRegisterModal = () => {
    setRegisterModal(!registerModal)
    toggle()
  }

  const getCourseDetails = (name) => {
    setIndex(parseInt(name))
  }
  return (
    <AppContext.Provider
      value={{ index, getCourseDetails, handleRegisterModal, registerModal }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  index: PropTypes.number,
  children: PropTypes.node.isRequired,
}

export default AppContext
