import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab, showTabs } from '../../store/actions/tabAction'

import ContentHeader from '../../components/Content/ContentHeader/ContentHeader'
import Content from '../../components/Content/Content'
import Tabs from '../../components/Tab/Tabs'
import TabsHeader from '../../components/Tab/TabsHeader/TabsHeader'
import TabsContent from '../../components/Tab/TabsContent/TabsContent'
import TabHeader from '../../components/Tab/TabsHeader/TabHeader/TabHeader'
import TabContent from '../../components/Tab/TabsContent/TabContent/TabContent'

class BillingCicle extends Component {
  componentWillMount() {
    this.props.selectTab('tabList')
    this.props.showTabs('tabList', 'tabCreate')
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
                <h1>Lista</h1>
              </TabContent>
              <TabContent id='tabCreate'>
                <h1>Incluir</h1>
              </TabContent>
              <TabContent id='tabUpdate'>
                <h1>Alterar</h1>
              </TabContent>
              <TabContent id='tabDelete'>
                <h1>Excluir</h1>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTab, showTabs }, dispatch)
}

export default connect(null, mapDispatchToProps)(BillingCicle)
