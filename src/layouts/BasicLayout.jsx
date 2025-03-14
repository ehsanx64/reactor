import { useState } from 'react'
import { Outlet } from 'react-router'

function BasicLayout() {
  return (
    <>
      <h1>Simple</h1>
      <Outlet />
    </>
  )
}

export default BasicLayout
