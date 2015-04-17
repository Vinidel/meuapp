//

module.exports = function(app){
  var auth = require('./../middlewares/auth');
  var home = app.controllers.home;
  //app.get('/first-page', autenticator, home.index);
  app.post('/login', home.login);
  app.get('/logout', home.logout);
  };
