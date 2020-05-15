import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import dashboardReducer from './reducers/dashboardReducer'
import tabReducer from './reducers/tabReducer'
import billingCycleReducer from './reducers/billingCycleReducer'

//Plugin redux, para desenvolvedor
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  billingCycle: billingCycleReducer,
  form: formReducer,
  toastr: toastrReducer,
})

function storeConfig() {
  return applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
}

export default storeConfig
