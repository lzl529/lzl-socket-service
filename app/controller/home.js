'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    ctx.body = 'hi, egg';
  }
  async apiemit(){
    const {app, ctx} = this;
    app.io.emit('receive-msg', { text: `有人通过接口请求触发了推送`, key: `${Math.random()}-${+new Date()}` })
    ctx.body = {
      code: 200,
      msg: 'success'
    }
  }
}

module.exports = HomeController;
