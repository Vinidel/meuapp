module.exports = function(app){

  var HomeController = {
      index: function(req, res){
        console.log('Entrou no index');
        var user = req.session.user;
        var params = {user: user};

        res.render('home/home', params);
      },
      login: function(req, res){
        console.log('Entrou no /login')

        var email = req.body.user.email;
        var user = req.body.user.name;

        if(email && user){
          var user = req.body.user;
          req.session.user = user;

          console.log(user);
          res.render('home/home');
        }else{
          res.redirect('/');
        }

      },
      logout: function(req, res) {
        req.session.destroy(function (err) {
          if(err){
            throw err;
          }else {
            res.redirect('/');
          }

        })
      }
  };
  return HomeController;
};
