import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configStore from './store/storeConfig'

import Routes from './main/routes'

const store = configStore()

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
)
