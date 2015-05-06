var YAML = require('yamljs');

module.exports = {
  bind : function (app) {

    app.get('*', function (req, res) {
      res.render('layout');
    });

    // add your routes here

  }
};
