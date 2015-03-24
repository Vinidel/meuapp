//

module.exports = function(app){
  var autenticator = require('./../middlewares/autenticator')
  var home = app.controllers.home;
  app.get('/index', autenticator, home.index);
};
