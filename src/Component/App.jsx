import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import Logout from './Logout'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} >
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<h1>Error 404 Resource Not Found</h1>} />

      </Routes>
    </div>
  )
}

export default App