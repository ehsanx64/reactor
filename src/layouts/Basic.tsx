import { Outlet } from 'react-router'

function Basic() {
  return (
    <div className="mx-auto w-full flex p-4">
      <Outlet />
    </div>
  )
}

export default Basic
