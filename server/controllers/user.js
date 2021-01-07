const jsonwebtoken = require('jsonwebtoken');

const UserModel = require('../models/user');

class UserController {
  /**
   * 注册逻辑
   * @param {*} ctx 
   */
  static async register(ctx) {
    const { body } = ctx.request;
    const username = body.username;
    const email = body.email;
    const password = body.password;

    try {
      if (!username || !email || !password) {
        ctx.body = {
          errcode: -1,
          errmsg: `expected an object with username, password, email but got: ${body}`,
          token: '',
          data: null
        };
        ctx.status = 200;

      } else {
        const res = await UserModel.create([
          { username, email, password }
        ])

        if (res) {
          ctx.body = {
            errcode: 0,
            errmsg: 'register success',
            // 生成 token 返回给客户端
            token: jsonwebtoken.sign({
              data: { username, email, password },
              // 设置 token 过期时间
              exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7), // token过期时间是1星期
            }, 'jwt_secret'),
            data: { username, email, password }
          };
        } else {
          ctx.body = {
            errcode: -2,
            errmsg: 'insert data fail',
            token: '',
            data: null
          };
        }

        ctx.status = 200;
      }
    } catch(err) {
      ctx.status = 500;
    }
  }

  /**
   * 登录逻辑
   * @param {*} ctx
   */
  static async login(ctx) {
    const { body } = ctx.request;
    const username = body.username;
    const password = body.password;

    try {
      if (!username || !password) {
        ctx.body = {
          errcode: -1,
          errmsg: `expected an object with username, password but got: ${body}`,
          token: '',
          data: null
        };

        return;
      }

      const res = await UserModel.findOne({ 'username': username })
      if (res) {
        if (res.password === password) {
          let userInfo = {
            username,
            password,
            email: res.email
          }

          ctx.body = {
            errcode: 0,
            message: 'login success.',
            data: {
              user: userInfo,
            },
            // 生成 token 返回给客户端
            token: jsonwebtoken.sign({
              data: userInfo,
              // 设置 token 过期时间
              exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7), // token过期时间是1星期
            }, 'jwt_secret'),
          }
        } else {
          ctx.body = {
            errcode: -1,
            errmsg: 'password not match.',
            token: '',
            data: null
          };
        }
      } else {
        ctx.body = {
          errcode: -2,
          errmsg: `do not find user: ${username}`,
          token: '',
          data: null
        };
      }

      ctx.status = 200;
    } catch(err) {
    }
  }
}

module.exports = {
  register: UserController.register,
  login: UserController.login
}