'use strict';
module.exports = function(app) {
  var api = require('../controllers/apiController');

  app.route('/api/addAction')
      .post(api.addAction);

  app.route('/api/allActions')
      .get(api.listOfActions);

  app.route('/api/updateAction')
      .post(api.updateAction);

  app.route('/api/addDetailAction')
      .post(api.addDetailAction);

  app.route('/api/detailActionList/:id_action')
      .get(api.detailActionList);

  app.route('/api/upload')
      .post(api.uploadDoc);

  app.route('/api/docsActionList/:id_action')
      .get(api.docsActionList);
};
