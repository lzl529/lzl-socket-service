'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // 开启socket.io
  io: {
    enable: true,
    package: 'egg-socket.io',
  },
};
