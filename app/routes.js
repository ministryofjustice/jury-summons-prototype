module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('login');
    });

    app.get('/login', function (req, res) {
      var YAML = require('yamljs');
      var jurors = YAML.load(__dirname + '/../data/jurors.yml');
      var jurorNumber = req.query.jurorNumber.trim();

      if (jurors.indexOf(jurorNumber.replace(/ /g,'')) > -1) {
        res.redirect('/your-service');
      } else {
        var errors = {};

        if (jurorNumber === undefined || jurorNumber === '') {
          errors.jurorNumber = {
            fieldName: 'Juror number',
            msg: 'cannot be blank'
          }
        } else {
          errors.jurorNumber = {
            fieldName: 'Juror number',
            msg: 'is either invalid or not on our system'
          }
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
