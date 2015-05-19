module.exports = {
  bind : function (app) {

    app.get('/jury-service', function (req, res) {
      res.redirect('/');
    });

    app.get('/', function (req, res) {
      res.render('govuk-start-page', {
        env: process.env['NODE_ENV'], 
        debug: process.env['DEBUG']
      });
    });

    app.get('*', function (req, res) {
      res.render('layout', {
        env: process.env['NODE_ENV'],
        debug: process.env['DEBUG'],
        jurors: process.env['JURORS']
      });
    });

    // add your routes here

  }
};
