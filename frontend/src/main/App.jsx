import React from 'react'
import { HashRouter } from 'react-router-dom'

import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import Messages from '../components/Msg/Msg'

import Routes from './routes'

export default props => (
  <HashRouter>
    <div className='wrapper'>
      <Header />
      <Sidebar />
      <Routes />
      <Footer />
      <Messages />
    </div>
  </HashRouter>
)
