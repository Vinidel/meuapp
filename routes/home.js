//

module.exports = function(app){
  var autenticator = require('./../middlewares/autenticator')
  var home = app.controllers.home;
  //app.get('/first-page', autenticator, home.index);
  app.post('/login', home.login);
  };
