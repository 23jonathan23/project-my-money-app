import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from '../../store/actions/dashboardAction'

import ContentHeader from '../../components/Content/ContentHeader/ContentHeader'
import Content from '../../components/Content/Content'
import ValueBox from '../../components/ValueBox/ValueBox'
import Row from '../../components/Row/Row'

class Dashboard extends Component {
  componentWillMount() {
    this.props.getSummary()
  }

  render() {
    const { credit, debit } = this.props.summary
    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão 1.0' />
        <Content>
          <Row>
            <ValueBox
              cols='12 4'
              color='green'
              icon='bank'
              value={`R$ ${credit}`}
              text='Total de Créditos'
            />
            <ValueBox
              cols='12 4'
              color='red'
              icon='credit-card'
              value={`R$ ${debit}`}
              text='Total de Débitos'
            />
            <ValueBox
              cols='12 4'
              color='blue'
              icon='money'
              value={`R$ ${credit - debit}`}
              text='Valor Consolidado'
            />
          </Row>
        </Content>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { summary: state.dashboard.summary }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSummary }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
