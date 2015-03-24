module.exports = function(app){
  var signin = app.controllers.signin;
  app.get('/', signin.index);
};
