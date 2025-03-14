import { useState } from 'react'
import { Outlet } from 'react-router'
import DashboardNavbar from './DashboardNavbar'
import DashboardSidebar from './DashboardSidebar'
import DashboardContent from './DashboardContent'

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
        <DashboardNavbar />
        <DashboardSidebar />
        <DashboardContent>
          <Outlet />
        </DashboardContent>
    </div>
  )
}

export default DashboardLayout
