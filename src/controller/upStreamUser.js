var User = require('../models/UpStreamUser')

class UserController {

  async produce(ctx) {
    const data = ctx.request.query;
    User.produce(data.userId, data);
    ctx.body = {
        status: 200,
        infoText: 'Finished Produce!'
      };
  }

}

module.exports = new UserController();
