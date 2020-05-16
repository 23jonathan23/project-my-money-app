import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

import configStore from './store/storeConfig'

import AuthOrApp from './main/AuthOrApp'

const store = configStore()

ReactDOM.render(
  <Provider store={store}>
    <AuthOrApp />
  </Provider>,
  document.getElementById('app')
)
serviceWorker.unregister()
