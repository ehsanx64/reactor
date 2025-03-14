import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavLink, BrowserRouter, Routes, Route } from 'react-router'

import DashboardLayout from './layouts/DashboardLayout.jsx'
import BasicLayout from './layouts/BasicLayout.jsx'
import Main from './pages/dashboard/Main.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
  
function App({ children }) {
  const [count, setCount] = useState(0)

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
