var YAML = require('yamljs');

module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('login');
    });

    app.get('/login', function (req, res) {
      var jurors = YAML.load(__dirname + '/../data/jurors.yml');
      var jurorNumber = req.query.jurorNumber.trim();

      if (jurors.indexOf(jurorNumber.replace(/ /g,'')) > -1) {
        res.redirect('/your-service');
      } else {
        var data = {
          errors: {},
          jurorNumber: jurorNumber
        };

        if (jurorNumber === undefined || jurorNumber === '') {
          data.errors.jurorNumber = {
            fieldName: 'Juror number',
            msg: 'cannot be blank'
          }
        } else {
          data.errors.jurorNumber = {
            fieldName: 'Juror number',
            msg: 'is either invalid or not on our system'
          }
        }

        res.render('login', data);
      }
    });

    app.get('/your-service/:step?', function (req, res) {
      var steps = YAML.load(__dirname + '/../data/steps.yml');
      var index = req.params.step ? parseInt(req.params.step) : 0;
      var prefix = '/your-service/';
      var data = {
        next: index < steps.length ? prefix + (index + 1) : null,
        previous: index > 1 ? prefix + (index - 1) : prefix
      };

      res.render('steps/' + steps[index], data);
    });

    // add your routes here

  }
};
