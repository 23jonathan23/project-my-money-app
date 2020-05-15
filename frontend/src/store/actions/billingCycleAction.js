import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'

import { selectTab, showTabs } from '../actions/tabAction'

import { BILLING_CYCLES_FETCHED } from './actionsType'
import api from '../../services/api'

const INITIAL_VALUES = { credits: [{}], debits: [{}] }

export const getList = () => {
  const request = api.get('/billingCycles')
  return {
    type: BILLING_CYCLES_FETCHED,
    payload: request,
  }
}

export const create = values => {
  return submit(values, 'post')
}

export const update = values => {
  return submit(values, 'put')
}

export const remove = values => {
  return submit(values, 'delete')
}

function submit(values, method) {
  const id = values._id ? values._id : ''
  return dispatch => {
    api[method](`/billingCycles/${id}`, values)
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

export const showTab = (billingCycle, tab) => {
  return [
    showTabs(tab),
    selectTab(tab),
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
