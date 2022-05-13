import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/css/reset.css'
import './virtual:windi.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '@/store'
// TODO:考虑要不要加styled-components
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
