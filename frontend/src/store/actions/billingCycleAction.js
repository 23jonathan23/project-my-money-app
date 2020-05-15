import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

import { selectTab, showTabs } from '../actions/tabAction'

import { BILLING_CYCLES_FETCHED } from './actionsType'
import api from '../../services/api'

const INITIAL_VALUES = {}

export const getList = () => {
  const request = api.get('/billingCycles')
  return {
    type: BILLING_CYCLES_FETCHED,
    payload: request,
  }
}

export const create = values => {
  return dispatch => {
    api
      .post('/billingCycles', values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação Realizada com sucesso.')
        dispatch(init())
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error('Erro', error))
      })
    return {
      type: 'TEMP',
    }
  }
}

export const showUpdate = billingCycle => {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle),
  ]
}

export const init = () => {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES),
  ]
}
