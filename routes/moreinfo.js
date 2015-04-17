//

module.exports = function(app){
  var auth = require('./../middlewares/auth');
  var moreInfo = app.controllers.moreinfo;
  app.get('/details', auth, moreInfo.details);
};
