import { useSelector } from 'react-redux'
import jwtDecode from 'jwt-decode'

import { selectCurrentToken } from '../pages/Auth/api/authSlice'

const useAuth = () => {
  const token = useSelector(selectCurrentToken)
  let isStudent = false
  let isAdmin = false
  let status = 'TUTOR'

  if (token) {
    const decoded = jwtDecode(token)
    const { role } = decoded

    isStudent = role.includes('STUDENT')
    isAdmin = role.includes('ADMIN')

    if (isStudent) status = 'STUDENT'
    if (isAdmin) status = 'ADMIN'

    return { role, status, isStudent, isAdmin }
  }

  return { role: '', status, isStudent, isAdmin }
}
export default useAuth
