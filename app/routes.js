var YAML = require('yamljs');
var _ = require('underscore');

function parseCheckboxes (formData) {
  _.each(formData, function (value, key) {
    if (value === '1' || value === '0') {
      formData[key] = parseInt(value);
    }
  });
  return formData;
}

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

    app.all('/your-service/:step?', function (req, res) {
      var steps = YAML.load(__dirname + '/../data/steps.yml');
      var index = req.params.step ? parseInt(req.params.step) : 0;
      var prefix = '/your-service/';
      var data = {
        next: index < steps.length ? prefix + (index + 1) : null,
        previous: index > 1 ? prefix + (index - 1) : prefix
      };

      // create property if it doesn't already exist
      req.session.formData = req.session.formData || {};
      // save form data to session
      var formData = _.extend(req.session.formData, req.body);
      // parse true/false values for checkboxes
      formData = parseCheckboxes(formData);

      req.session.formData = data.formData = formData;

      res.render('steps/' + steps[index], data);
    });

    // add your routes here

  }
};
