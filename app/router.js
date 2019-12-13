'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  // 配置接口路由
  router.get('/', controller.home.index);
  router.get('/push', controller.home.apiemit);
  // 配置soket路由
  io.of('/').route('chat', io.controller.chat.chat);
};
