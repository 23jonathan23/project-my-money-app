import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from '../../store/actions/billingCycleAction'

import LabelAndInput from '../LabelAndInput/LabelAndInput'

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form className='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field
            name='name'
            component={LabelAndInput}
            label='Nome'
            cols='12 4'
            placeholder='Informe o nome'
          />
          <Field
            name='month'
            component={LabelAndInput}
            label='Mês'
            type='number'
            cols='12 4'
            placeholder='Informe o mês'
          />
          <Field
            name='year'
            component={LabelAndInput}
            label='Ano'
            type='number'
            cols='12 4'
            placeholder='Informe o ano'
          />
        </div>
        <div className='box-footer'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
          <button
            type='button'
            className='btn btn-default'
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({
  form: 'billingCycleForm',
  destroyOnUnmount: false,
})(BillingCycleForm)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ init }, dispatch)
}

export default connect(null, mapDispatchToProps)(BillingCycleForm)
