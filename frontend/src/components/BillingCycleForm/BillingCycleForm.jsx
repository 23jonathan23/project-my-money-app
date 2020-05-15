import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from '../../store/actions/billingCycleAction'

import LabelAndInput from '../LabelAndInput/LabelAndInput'
import ItemList from '../ItemList/ItemList'
import Summary from '../Summary/Summary'

class BillingCycleForm extends Component {
  calculateSummary() {
    const sum = (t, v) => t + v
    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebits: this.props.debits.map(d => +d.value || 0).reduce(sum),
    }
  }

  render() {
    const { handleSubmit, readOnly, credits, debits } = this.props
    const { sumOfCredits, sumOfDebits } = this.calculateSummary()
    return (
      <form className='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field
            name='name'
            component={LabelAndInput}
            label='Nome'
            cols='12 4'
            placeholder='Informe o nome'
            readOnly={readOnly}
          />
          <Field
            name='month'
            component={LabelAndInput}
            label='Mês'
            type='number'
            cols='12 4'
            placeholder='Informe o mês'
            readOnly={readOnly}
          />
          <Field
            name='year'
            component={LabelAndInput}
            label='Ano'
            type='number'
            cols='12 4'
            placeholder='Informe o ano'
            readOnly={readOnly}
          />
          <Summary credit={sumOfCredits} debit={sumOfDebits} />
          <ItemList
            cols='12 6'
            list={credits}
            readOnly={readOnly}
            field='credits'
            legend='Créditos'
          />
          <ItemList
            cols='12 6'
            list={debits}
            readOnly={readOnly}
            field='debits'
            legend='Débitos'
            showStatus={true}
          />
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
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

const selector = formValueSelector('billingCycleForm')

function mapStateToProps(state) {
  return {
    credits: selector(state, 'credits'),
    debits: selector(state, 'debits'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ init }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
