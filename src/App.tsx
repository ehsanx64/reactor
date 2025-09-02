import { BrowserRouter, Routes, Route } from 'react-router'

import Dashboard from './layouts/Dashboard.js'
import Basic from './layouts/Basic.jsx'
import Main from './pages/dashboard/Main.jsx'
import Settings from './pages/dashboard/Settings.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'

import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Basic />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Route>

                <Route path="dashboard" element={<Dashboard />}>
                    <Route index element={<Main />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
