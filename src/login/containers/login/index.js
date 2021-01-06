import React, { Component } from 'react';
import './index.less';
import { login } from '../../actions/login';
import { connect } from 'react-redux';

class Login extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      username: '',
      password: ''
    }
  }

  pageToRegister = () => {
    window.location.href = '/register.html';
  }

  onUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  login = () => {
    const {
      username,
      password
    } = this.state;

    this.props.login(username, password)
  }

  render() {
    return (
      <div className="container">
        <h3>帐号密码登录</h3>
        <p className="safe-tips">为了你的帐号安全，请用手机号登录</p>
        <div className='input-field-wrap'>
          <input 
            type='text'
            placeholder='请输入手机号'
            className='input-field'
            onChange={this.onUsernameChange}
          />
        </div>
        <div className='input-field-wrap'>
          <input 
            type='password'
            placeholder='请输入密码'
            className='input-field'
            maxLength="20"
            onChange={this.onPasswordChange}
          />
        </div>
        <div className='login-btn' onClick={this.login}>登录</div>
        <div className="check-type">
          <div className="login" onClick={this.pageToRegister}>注册账号</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => {
    return dispatch(login(username, password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);