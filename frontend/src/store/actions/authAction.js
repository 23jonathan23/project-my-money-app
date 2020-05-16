import { toastr } from 'react-redux-toastr'

import { USER_FETCHED, TOKEN_VALIDATED } from './actionsType'

import openApi from '../../services/openApi'

export const login = values => {
  console.log(values)
  return submit(values, '/login')
}

export const signup = values => {
  return submit(values, '/signup')
}

const submit = (values, url) => {
  return dispatch => {
    openApi
      .post(url, values)
      .then(resp => {
        dispatch([{ type: USER_FETCHED, payload: resp.data }])
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error('Erro', error))
      })
  }
}

export const logout = () => {
  return { type: TOKEN_VALIDATED, payload: null }
}

export const validateToken = token => {
  return dispatch => {
    if (token) {
      openApi
        .post('/validateToken', { token })
        .then(resp => {
          dispatch({ type: TOKEN_VALIDATED, payload: resp.data.valid })
        })
        .catch(e => dispatch({ type: TOKEN_VALIDATED, payload: false }))
    } else {
      dispatch({ type: TOKEN_VALIDATED, payload: false })
    }
  }
}
