module.exports = {
  bind : function (app) {

    app.get('*', function (req, res) {
      res.render('layout', {env: 'production', debug: process.env['DEBUG']});
    });

    // add your routes here

  }
};
