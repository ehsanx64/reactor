import { useState } from 'react'

function DashboardContent({children}) {
  return (
    <div className="dashboard-content">
      {children}
    </div>
  )
}

export default DashboardContent

