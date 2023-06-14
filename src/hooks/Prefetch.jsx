import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { store } from '../../app/store'

const Prefetch = () => {
  useEffect(() => {
    //   call api located in protected routes on first render
    store.dispatch()
    // store.dispatch(
    //   usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true })
    // )
  }, [])

  return <Outlet />
}
export default Prefetch
