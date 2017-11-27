var User = require('./models/users.js');

module.exports = function(app, express) {
  var api = express.Router();

  api.get('/users', function(req, res) {
    var promise = User.find({}).exec();
    promise.then(users => {
      res.json(users);
    })
    .catch(err => {
      res.send(err);
    });
  });

  return api;
}
