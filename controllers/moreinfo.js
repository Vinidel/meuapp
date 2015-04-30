//

module.exports = function(app){
  var moreInfoController = {
    details: function(req, res){
      var user = req.session.user;
      var params = {user: user};

    res.render('moreinfo/details', params);
    console.log(params);
    }
  };
  return moreInfoController;
};
