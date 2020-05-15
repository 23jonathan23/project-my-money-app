import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  create,
  update,
  remove,
  init,
} from '../../store/actions/billingCycleAction'

import ContentHeader from '../../components/Content/ContentHeader/ContentHeader'
import Content from '../../components/Content/Content'
import Tabs from '../../components/Tab/Tabs'
import TabsHeader from '../../components/Tab/TabsHeader/TabsHeader'
import TabsContent from '../../components/Tab/TabsContent/TabsContent'
import TabHeader from '../../components/Tab/TabsHeader/TabHeader/TabHeader'
import TabContent from '../../components/Tab/TabsContent/TabContent/TabContent'
import List from '../../components/BillingCycleList/BillingCycleList'
import Form from '../../components/BillingCycleForm/BillingCycleForm'

class BillingCicle extends Component {
  componentWillMount() {
    this.props.init()
  }

  render() {
    return (
      <div>
        <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList' />
              <TabHeader label='Incluir' icon='plus' target='tabCreate' />
              <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <List />
              </TabContent>
              <TabContent id='tabCreate'>
                <Form
                  onSubmit={this.props.create}
                  submitClass='primary'
                  submitLabel='Incluir'
                />
              </TabContent>
              <TabContent id='tabUpdate'>
                <Form
                  onSubmit={this.props.update}
                  submitClass='info'
                  submitLabel='Alterar'
                />
              </TabContent>
              <TabContent id='tabDelete'>
                <Form
                  onSubmit={this.props.remove}
                  readOnly={true}
                  submitClass='danger'
                  submitLabel='Excluir'
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ create, update, remove, init }, dispatch)
}

export default connect(null, mapDispatchToProps)(BillingCicle)
