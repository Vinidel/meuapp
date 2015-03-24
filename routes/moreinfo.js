//

module.exports = function(app){
  var moreInfo = app.controllers.moreinfo;
  app.get('/details', moreInfo.details);
};
