'use strict';

module.exports = function (app) {
  // User Routes
  var users = require('../controllers/users.server.controller');

  // Setting up the users profile api
  app.route('/api/categories').get(users.me);
  app.route('/api/categories/{:id}').get(users.me);
  app.route('/api/categories').post(users.me);
  app.route('/api/categories/{:id}').delete(users.me);
  app.route('/api/categories/{:id}').put(users.me);



  app.route('/api/users/me').get(users.me);
  app.route('/api/users').put(users.update);
  app.route('/api/users/accounts').delete(users.removeOAuthProvider);
  app.route('/api/users/password').post(users.changePassword);
  app.route('/api/users/picture').post(users.changeProfilePicture);

  // Finish by binding the user middleware
  app.param('userId', users.userByID);
};
