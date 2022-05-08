import React from 'react'
import { HashRouter } from 'react-router-dom'

import Footer from '@/components/footer'
import Header from '@/components/header'
import Router from '@/router'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Router />
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
