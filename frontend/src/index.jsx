import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configStore from './store/storeConfig'

import App from './main/App'

const store = configStore()

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('app'))