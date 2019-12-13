'use strict';

module.exports = () => {
  return async (ctx, next) => {
    const { socket } = ctx;
    console.log('恭喜你连接成功了!' + socket.id);
    socket.emit('success-connect', '恭喜你连接成功了!你的id是' + socket.id);
    socket.emit('receive-msg', { text: `欢迎：${socket.id}进入房间`, key: `${socket.id}-${+new Date()}` })
    await next();
    socket.emit('receive-msg', { text: `${socket.id}离开房间`, key: `${socket.id}-${+new Date()}` })
    // execute when disconnect.
    console.log('disconnection!');
  };
};
