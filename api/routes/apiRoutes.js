'use strict';
module.exports = function(app) {
  var api = require('../controllers/apiController');

  app.route('/api/addAction')
      .post(api.addAction);
  app.route('/api/allActions')
      .get(api.listOfActions);
  app.route('/api/updateAction')
      .post(api.updateAction)
};
