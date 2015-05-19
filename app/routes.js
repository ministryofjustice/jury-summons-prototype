module.exports = {
  bind : function (app) {

    app.get('/jury-service', function (req, res) {
      res.render('govuk-start-page', {
        env: process.env['NODE_ENV'], 
        debug: process.env['DEBUG'],
        serviceUrl: process.env['SERVICE_URL'] || 'http://localhost:4000'
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
