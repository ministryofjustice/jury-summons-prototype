module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('login');
    });

    app.get('/login', function (req, res) {
      var YAML = require('yamljs');
      var jurors = YAML.load(__dirname + '/../data/jurors.yml');
      var jurorNumber = req.query.jurorNumber;

      if (jurors.indexOf(jurorNumber) > -1) {
        res.redirect('/your-service');
      } else {
        var errors = {
          jurorNumber: 'Your juror number is wrong'
        }
        res.render('login', {
          'errors': errors,
          'jurorNumber': jurorNumber
        });
      }
    });

    // add your routes here

  }
};
