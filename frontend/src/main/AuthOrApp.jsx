import '../common/dependencies'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import api from '../services/api'

import App from './App'
import Auth from '../pages/auth/Auth'

import { validateToken } from '../store/actions/authAction'

class AuthOrApp extends Component {
  componentWillMount() {
    if (this.props.auth.user) {
      this.props.validateToken(this.props.auth.user.token)
    }
  }

  render() {
    const { user, validToken } = this.props.auth
    if (user && validToken) {
      api.defaults.headers.common['authorization'] = user.token
      return <App>{this.props.children}</App>
    } else if (!user && !validToken) {
      return <Auth />
    } else {
      return false
    }
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ validateToken }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)
