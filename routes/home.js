//

module.exports = function(app){
  var auth = require('./../middlewares/auth');
  var home = app.controllers.home;
  //app.get('/first-page', autenticator, home.index);
  app.post('/home', home.login);
  app.get('/index', auth, home.index);
  app.get('/logout', home.logout);
  };
