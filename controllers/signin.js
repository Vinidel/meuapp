module.exports = function(app){

  var signinController = {
      index: function(req, res){
        res.render('signin/index')
      }
  };
  return signinController;
};
