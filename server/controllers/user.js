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
}

module.exports = {
  register: UserController.register
}