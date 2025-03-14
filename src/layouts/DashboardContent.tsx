interface DashboardContentProps {
  children: React.ReactNode;
}

function DashboardContent({children}: DashboardContentProps) {
  return (
    <div className="dashboard-content">
      {children}
    </div>
  )
}

export default DashboardContent
