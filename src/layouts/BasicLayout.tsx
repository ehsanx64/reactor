import { useState } from 'react'
import { Outlet } from 'react-router'

function BasicLayout() {
  return (
    <div className="basic-layout">
      <Outlet />
    </div>
  )
}

export default BasicLayout
