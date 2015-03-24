//

module.exports = function(app){
  var autenticator = require('./../middlewares/autenticator');
  var moreInfo = app.controllers.moreinfo;
  app.get('/details', autenticator, moreInfo.details);
};
