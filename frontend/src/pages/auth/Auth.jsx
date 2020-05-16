import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './Auth.css'

import { login, signup } from '../../store/actions/authAction'

import Row from '../../components/Row/Row'
import Grid from '../../components/Grid/Grid'
import If from '../../components/If/If'
import Msg from '../../components/Msg/Msg'
import InputAuth from '../../components/InputAuth/InputAuth'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = { loginMode: true }
  }

  changeMode() {
    this.setState({ loginMode: !this.state.loginMode })
  }

  onSubmit(values) {
    const { login, signup } = this.props
    this.state.loginMode ? login(values) : signup(values)
  }

  render() {
    const { loginMode } = this.state
    const { handleSubmit } = this.props
    return (
      <div className='login-box'>
        <div className='login-logo'>
          <b> My</b> Money
        </div>
        <div className='login-box-body'>
          <p className='login-box-msg'>Bem vindo!</p>
          <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
            <Field
              component={InputAuth}
              type='input'
              name='name'
              placeholder='Nome'
              icon='user'
              hide={loginMode}
            />
            <Field
              component={InputAuth}
              type='email'
              name='email'
              placeholder='E-mail'
              icon='envelope'
            />
            <Field
              component={InputAuth}
              type='password'
              name='password'
              placeholder='Senha'
              icon='lock'
            />
            <Field
              component={InputAuth}
              type='password'
              name='confirm_password'
              placeholder='Confirmar Senha'
              icon='lock'
              hide={loginMode}
            />
            <Row>
              <Grid cols='4'>
                <button
                  type='submit'
                  className='btn btn-primary btn-block btn-flat'
                >
                  {loginMode ? 'Entrar' : 'Registrar'}
                </button>
              </Grid>
            </Row>
          </form>
          <br />
          <a onClick={() => this.changeMode()}>
            {loginMode
              ? 'Novo usuário? Registrar aqui!'
              : 'Já é cadastrado? Entrar aqui!'}
          </a>
        </div>
        <Msg />
      </div>
    )
  }
}

Auth = reduxForm({ form: 'authForm' })(Auth)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login, signup }, dispatch)
}

export default connect(null, mapDispatchToProps)(Auth)
