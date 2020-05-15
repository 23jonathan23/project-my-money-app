import '../common/dependencies'
import React from 'react'

import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import Routes from './routes'
import Messages from '../components/Msg/Msg'

export default props => (
  <div className='wrapper'>
    <Header />
    <Sidebar />
    <div className='content-wrapper'>
      <Routes />
    </div>
    <Footer />
    <Messages />
  </div>
)
