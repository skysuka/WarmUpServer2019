/*
 * @Description: 
 * @version: 
 * @Author: lqs
 * @Date: 2019-08-14 11:46:10
 * @LastEditTime: 2019-08-19 16:38:59
 */

var User = require('../models/User')

class UserController {
  async login(ctx) {
    const data = ctx.request.body;
    const result = await User.findUserByEmail(data.email);
    if (result == null) {
      console.log(`[INFO]: ${data.email}用户不存在`)
      ctx.body = {
        status: 200,
        statusText: 'err',
        infoText: '该用户不存在'
      };
    }
    else {
      if (data.password == result.dataValues.password){
        console.log(`[INFO]: ${data.email}用户登录`)
        ctx.body = {
          status: 200,
          statusText: 'ok',
          infoText: '登录成功'
        }
      }
      else {
        console.log(`[INFO]: ${data.email}用户登录失败, 密码错误`)
        ctx.body = {
          status: 200,
          statusText: 'err',
          infoText: '密码错误'
        }
      }
    }
  }

  async register(ctx) {
    const data = ctx.request.body;
    const result = await User.findUserByEmail(data.email);
    if (result == null) {
      console.log(`[INFO]: ${data.email} 用户不存在, 进行创建`);
      User.addUser(data.email, data.password);
      ctx.body = {
        status: 200,
        statusText: 'ok',
        infoText: '注册成功'
      };
    }
    else{
      console.log(`[INFO]: ${data.email} 用户已存在, 返回错误消息`);
      ctx.body = {
        status: 200,
        statusText: 'err',
        infoText: '此邮箱已注册'
      };
    }
  }
  
  async logout(ctx) {
    ctx.body = {
      status: 200,
      statusText: 'ok',
      currentAuthority: 'guest',
    };
  }
}

module.exports = new UserController();
