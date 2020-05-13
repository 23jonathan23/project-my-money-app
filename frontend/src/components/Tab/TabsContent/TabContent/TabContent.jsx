import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../../../If/If'

class TabContent extends Component {
  render() {
    const selected = this.props.tab === this.props.id
    const visible = this.props.visible[this.props.id]
    return (
      <If test={visible}>
        <div
          id={this.props.id}
          className={`tab-pane ${selected ? 'active' : ''}`}
        >
          {this.props.children}
        </div>
      </If>
    )
  }
}

function mapStateToProps(state) {
  return { tab: state.tab.selected, visible: state.tab.visible }
}

export default connect(mapStateToProps)(TabContent)
