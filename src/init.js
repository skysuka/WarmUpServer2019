// var User = require('./models/User');
// user.sync();

var upStreamUser = require('./models/UpStreamUser');
upStreamUser.sync();
upStreamUser.addUser('group1')
upStreamUser.addUser('group2')
upStreamUser.addUser('group3')

var downStreamUser = require('./models/DownStreamUser');
downStreamUser.sync();