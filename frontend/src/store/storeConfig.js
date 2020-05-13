import { createStore, combineReducers, applyMiddleware } from 'redux'

import promise from 'redux-promise'

import dashboardReducer from './reducers/dashboardReducer'
import tabReducer from './reducers/tabReducer'

//Plugin redux, para desenvolvedor
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
})

function storeConfig() {
  return applyMiddleware(promise)(createStore)(reducers, devTools)
}

export default storeConfig
