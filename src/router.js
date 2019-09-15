const userController = require('./controller/user')

module.exports = (router) => {
  router.prefix('/api');
  router
    .post('/login', userController.login)
    .post('/register', userController.register)
    .post('/logout', userController.logout)
    ;
};
