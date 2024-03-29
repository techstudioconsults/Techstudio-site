import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

import usePersist from '../../../hooks/usePersist'
import { useRefreshMutation } from '../api/authApiSlice'
import { selectCurrentToken } from '../api/authSlice'

const PersistLogin = () => {
  let content
  const [persist] = usePersist()
  const token = useSelector(selectCurrentToken)
  const effectRan = useRef(false)

  const [trueSuccess, setTrueSuccess] = useState(false)

  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useRefreshMutation()

  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
      // React 18 Strict Mode

      const verifyRefreshToken = async () => {
        console.log('verifying refresh token')
        try {
          //const response =
          await refresh()
          //const { accessToken } = response.data
          setTrueSuccess(true)
        } catch (err) {
          console.error(err)
        }
      }

      if (!token && persist) verifyRefreshToken()
    }
    //clean up effect function
    return () => (effectRan.current = true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!persist) {
    // persist: no
    console.log('no persist')
    content = <Outlet />
  } else if (isLoading) {
    //persist: yes, token: no
    console.log('loading')
  } else if (isError) {
    //persist: yes, token: no
    console.log(error)
    content = (
      <p className='text-center'>
        You lost your token after refresh
        <Link to='/login'>Please login again</Link>.
      </p>
    )
  } else if (isSuccess && trueSuccess) {
    //persist: yes, token: yes
    console.log('success')
    content = <Outlet />
  } else if (token && isUninitialized) {
    //persist: yes, token: yes
    console.log('token and uninit')
    console.log(isUninitialized)
    content = <Outlet />
  }

  return content
}
export default PersistLogin
