import React from 'react'
import { useRoutes } from 'react-router-dom'

import Discover from '@/views/discover'
import Friend from '@/views/friends'
const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <Discover />
    },
    {
      path: '/friend',
      element: <Friend />
    }
  ])
}

export default Router
