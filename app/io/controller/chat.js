'use strict';

const Controller = require('egg').Controller;
const room = 'default_room';


class ChatController extends Controller {
  async chat() {
    const { ctx, app: { io } } = this;
    const nsp = io.of('/');
    console.log('进入chat controller');
    const msg = ctx.args[0] || {};
    const { socket: { id } } = ctx;
    console.log(`接收到的聊天内容为：id: ${id} -->> ${msg}`);
    nsp.to(room).emit('receive-msg', { text: `马甲-${id}：${msg}`, key: `${id}-${+new Date()}` });
  }
}
module.exports = ChatController;
