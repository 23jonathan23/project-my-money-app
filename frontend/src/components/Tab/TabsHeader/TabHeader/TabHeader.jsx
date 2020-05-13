import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from '../../../../store/actions/tabAction'

import If from '../../../If/If'

class TabHeader extends Component {
  render() {
    const selected = this.props.tab === this.props.target
    const visible = this.props.visible[this.props.target]

    return (
      <If test={visible}>
        <li className={selected ? 'active' : ''}>
          <a
            href='javascript:;'
            data-toggle='tab'
            onClick={() => this.props.selectTab(this.props.target)}
            data-target={this.props.target}
          >
            <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
          </a>
        </li>
      </If>
    )
  }
}

function mapStateToProps(state) {
  return { tab: state.tab.selected, visible: state.tab.visible }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTab }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)
