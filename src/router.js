const userController = require('./controller/user');
const downStreamUserController = require('./controller/downStreamUserController');

module.exports = (router) => {
  router.prefix('/api');
  router
    .post('/login', userController.login)
    .post('/register', userController.register)
    .post('/logout', userController.logout)
    .post('/processOneTurnSell',downStreamUserController.processOneTurnSell)//TODO : 不确定咋写
    ;
};
