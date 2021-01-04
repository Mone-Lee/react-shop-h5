import React, { Component } from 'react';
import './index.less';
import { register } from '../../actions/register';
import { connect } from 'react-redux';

class Register extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      username: '',
      email: '',
      password: '',
      rePassword: ''
    }
  }

  onUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  onRePasswordChange = (e) => {
    this.setState({
      rePassword: e.target.value
    });
  }

  register = () => {
    const { 
      username,
      password,
      rePassword,
      email
    } = this.state;

    this.props.register(username, password, email);
  }

  render() {
    return (
      <div className="container">
        <h3>免费注册</h3>
        <div className='input-field-wrap'>
          <input 
            type='tel'
            placeholder='请输入用户名'
            className='input-field'
            onChange={this.onUsernameChange}
          />
        </div>
        <div className='input-field-wrap'>
          <input 
            type='text'
            placeholder='请输入邮箱'
            className='input-field'
            onChange={this.onEmailChange}
          />
        </div>
        <div className='input-field-wrap'>
          <input 
            type='password'
            placeholder='请设置8-20位(数字+字符)密码'
            className='input-field'
            maxLength="20"
            onChange={this.onPasswordChange}
          />
        </div>
        <div className='input-field-wrap'>
          <input 
            type='password'
            placeholder='请再次输入密码'
            className='input-field'
            maxLength="20"
            onChange={this.onRePasswordChange}
          />
        </div>

        <div className='register-btn' onClick={this.register}>确定</div>
        <div className="check-type">
          <div className="login">已有账号，直接登录</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  register: (username, password, email) => {
    return dispatch(register(username, password, email));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);