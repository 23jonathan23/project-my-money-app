import api from '../../services/api'

import { BILLING_SUMMARY_FETCHED } from './actionsType'

export const getSummary = () => {

  const request = api.get('/billingCycles/summary')
  
    return { type: BILLING_SUMMARY_FETCHED, payload: request }
}