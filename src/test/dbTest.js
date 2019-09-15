/*
 * @Description: 
 * @version: 
 * @Author: lqs
 * @Date: 2019-07-28 23:38:03
 * @LastEditTime: 2019-08-19 16:42:16
 */
// 测试worker
var User = require('../models/Worker');
User.addUser('test0001', 'test0001@molardata.com','password').then(function() {
    return User.findUserByName('test0001');
  }).then(function(user) {
    console.log('[INFO]:')
    console.log('username:' + user.name);
    console.log('email:' + user.email);
  })