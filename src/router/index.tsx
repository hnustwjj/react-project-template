import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Discover from '@/views/discover'
import Friend from '@/views/friends'
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Discover />} />
      <Route path="/friends" element={<Friend />} />
    </Routes>
  )
}

export default Router
