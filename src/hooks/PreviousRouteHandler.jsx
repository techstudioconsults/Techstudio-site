/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom'

const UnkownRouteHandler = ({ to, children }) => {
  const prevRoute = useLocation()
  return (
    <Navigate to={to} state={{ prevRoute }} replace>
      {children}
    </Navigate>
  )
}

export default UnkownRouteHandler
