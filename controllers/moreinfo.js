//

module.exports = function(app){
  var moreInfoController = {
    details: function(req, res){
    res.render('moreinfo/details')
    }
  };
  return moreInfoController;
};
