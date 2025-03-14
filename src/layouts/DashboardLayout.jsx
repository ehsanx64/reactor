import { useState } from 'react'
import { Outlet } from 'react-router'
import DashboardNavbar from './DashboardNavbar'
import DashboardSidebar from './DashboardSidebar'

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
        <DashboardNavbar />
        <DashboardSidebar />
        <Outlet />
    </div>
  )
}

export default DashboardLayout
