import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Main from './Main'
import React from 'react'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
