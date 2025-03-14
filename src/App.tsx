import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'

import DashboardLayout from './layouts/DashboardLayout.jsx'
import BasicLayout from './layouts/BasicLayout.jsx'
import Main from './pages/dashboard/Main.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
  
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
