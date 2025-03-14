import { Outlet, useLocation } from 'react-router'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { useEffect } from 'react';
import useDocumentTitle from '@/hooks/use-document-title';

function Dashboard() {
  let location = useLocation();
  useDocumentTitle(location?.state?.title);

  useEffect(() => {
    console.log(location)
  }, [location]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-2 w-full">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}

export default Dashboard
