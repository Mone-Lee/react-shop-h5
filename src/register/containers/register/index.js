import React, { Component } from 'react';
import './index.less';
import { setItem } from '../../../assets/utils/common';
import { register } from '../../actions/register';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';

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

  register = async () => {
    const {
      username,
      password,
      rePassword,
      email
    } = this.state;

    // 输入内容校验

    const res = await this.props.register(username, password, email)
    console.log(res);
    if (res.errcode === 0) {
      setItem('token', res.token);
      Toast.info('注册成功');
      this.pageToIndex();
    } else {
      Toast.info(res.errmsg)
    }
  }

  pageToLogin = () => {
    window.location.href = '/login.html';
  }

  pageToIndex = () => {
    window.location.href = '/index.html';
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
          <div className="login" onClick={this.pageToLogin}>已有账号，直接登录</div>
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