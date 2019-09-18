var user = require('./models/User');
user.sync();

var downStreamUser = require('./models/DownStreamUser');
downStreamUser.sync();
