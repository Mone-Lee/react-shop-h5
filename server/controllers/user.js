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
        ctx.status = 400;

        ctx.body = {
          errcode: 400,
          errmsg: `expected an object with username, password, email but got: ${body}`,
        };

        return;
      } else {
        const res = await UserModel.create([
          { username, email, password }
        ])

        if (res) {
          ctx.status = 200;
          ctx.body = 'success';
        } else {
          ctx.status = 500;
          ctx.body = {
            errcode: 500,
            errmsg: 'insert data fail',
          };
        }
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
        ctx.status = 400;

        ctx.body = {
          error: `expected an object with username, password but got: ${body}`,
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
            code: 0,
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

          ctx.status = 200;
        } else {
          ctx.body = {
            error: 'password not match.',
          };
          ctx.status = 500;
        }
      } else {
        ctx.body = {
          error: `do not find user: ${username}`,
        };
        ctx.status = 500;
      }
    } catch(err) {
    }
  }
}

module.exports = {
  register: UserController.register,
  login: UserController.login
}